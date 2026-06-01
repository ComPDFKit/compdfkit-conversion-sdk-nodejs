const path = require("path");
const fs = require("fs");

function platformVendorDir() {
  if (process.platform === "win32") {
    return "windows-x86_64";
  }
  if (process.platform === "linux") {
    return "linux-x86_64";
  }
  throw new Error(`Unsupported platform: ${process.platform}`);
}

function firstExistingPath(paths) {
  return paths.find((candidate) => fs.existsSync(candidate)) || paths[0];
}

const vendorPath = firstExistingPath([
  path.join(__dirname, "compdfkit_conversion", "vendor", platformVendorDir()),
  __dirname,
]);
const addonPath = firstExistingPath([
  path.join(__dirname, "..", "build", "Release", "compdfkit_conversion_node.node"),
  path.join(__dirname, "compdfkit_conversion_node.node"),
]);
const resourcePath = firstExistingPath([
  path.join(__dirname, "compdfkit_conversion", "resource"),
  path.join(__dirname, "..", "resource"),
]);

function requiredVendorFiles() {
  if (process.platform === "win32") {
    return [
      "cpdfconversionsdk.dll",
      "DocumentAI.dll",
      "onnxruntime.dll",
      "onnxruntime_providers_shared.dll",
      "opencv_world4100.dll",
    ];
  }
  return [
    "libcpdfconversionsdk.so",
    "libDocumentAI.so.4.0.0",
    "libonnxruntime.so.1.18.0",
    "libopencv_world.so.410",
  ];
}

function assertRuntimeFiles() {
  if (!fs.existsSync(addonPath)) {
    throw new Error(
      `ComPDFKit Conversion Node addon not found: ${addonPath}. Run npm run build or use a release package that includes lib/compdfkit_conversion_node.node.`,
    );
  }

  if (!fs.existsSync(vendorPath)) {
    throw new Error(`ComPDFKit Conversion vendor directory not found: ${vendorPath}`);
  }

  const missingFiles = requiredVendorFiles()
    .map((name) => path.join(vendorPath, name))
    .filter((filePath) => !fs.existsSync(filePath));

  if (missingFiles.length > 0) {
    throw new Error(`ComPDFKit Conversion runtime libraries are missing:\n${missingFiles.join("\n")}`);
  }
}

assertRuntimeFiles();

if (process.platform === "win32") {
  process.env.PATH = `${vendorPath}${path.delimiter}${process.env.PATH || ""}`;
}

let native;
try {
  native = require(addonPath);
} catch (error) {
  throw new Error(
    `Failed to load ComPDFKit Conversion Node addon from ${addonPath}. Vendor path: ${vendorPath}. Original error: ${error.message}`,
  );
}

function normalizeResourcePath(customResourcePath = process.env.COMPDFKIT_RESOURCE_PATH || "") {
  const resolvedResourcePath = String(customResourcePath || "");
  if (resolvedResourcePath.length === 0) {
    return "";
  }

  const absoluteResourcePath = path.resolve(resolvedResourcePath);
  const fontsPath = path.join(absoluteResourcePath, "fonts");
  if (!fs.existsSync(fontsPath) || !fs.statSync(fontsPath).isDirectory()) {
    throw new Error(`SDK resource fonts directory not found: ${fontsPath}`);
  }
  return absoluteResourcePath;
}

function initialize(customResourcePath) {
  return native.initialize(normalizeResourcePath(customResourcePath));
}

module.exports = {
  ...native,
  initialize,
  normalizeResourcePath,
  resourcePath,
  vendorPath,
};