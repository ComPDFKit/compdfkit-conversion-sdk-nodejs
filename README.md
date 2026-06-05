# ComPDF Conversion SDK for Node.js

As part of the KDAN ecosystem, ComPDF Conversion SDK brings PDF document conversion to your Node.js applications. Convert PDF files into editable Office documents, images, HTML, and more — ideal for server-side document processing, REST API backends, and automation workflows that need reliable PDF transformation with layout preservation.

> If you find this library helpful, please consider giving us a ⭐ **Star** on GitHub! Have feedback or questions? Join the conversation in our [Discussions](https://github.com/orgs/ComPDFKit/discussions).

**Supported Features**

* Convert PDF to Word (.docx)

* Convert PDF to Excel (.xlsx)

* Convert PDF to PowerPoint (.pptx)

* Convert PDF to HTML (.html)

* Convert PDF to CSV (.csv)

* Convert PDF to Image (.png, .jpg, .jpeg, .jpeg2000, .bmp, .tiff, .tga, .gif, .webp)

* Convert PDF to Plain Text (.txt)

* Convert PDF to Rich Text Format (.rtf)

* Convert PDF to Searchable PDF (.pdf)

* Convert PDF to Structured Data (.json)

* Convert PDF to Markdown (.md)

* Convert PDF to OFD (.ofd)

* Optical Character Recognition (OCR)

* Layout Analysis

* Table Recognition

## Table of Contents

* [Why ComPDF Conversion SDK](#why-compdf-conversion-sdk)

* [Conversion Quality Preview](#conversion-quality-preview)

* [Requirements](#requirements)

* [How to Run a Demo](#how-to-run-a-demo)

* [Integration](#integration)

* [License and Free Trial](#license-and-free-trial)
  
  

* [Changelog](#changelog)

* [Technical Support](#technical-support)

* [Developer Guides for All Features](#developer-guides-for-all-features)

* [FAQ](#faq)
  
## **Why ComPDF Conversion SDK**
- **Mature Technology:** With years of technology accumulation, we have established a complete mechanism of product iteration to offer a continuous guarantee for product competitiveness.

- **High-Fidelity Conversion:** Designed to preserve layout, tables, text structure, and formatting in the output files.

- **AI-Enhanced Conversion:** Continuously improved for complex layout analysis, table recognition, OCR, and editable output.

- **Independent Intellectual Property Rights:** Our technology is independent and compliant with ISO, helping enterprises conduct international business without considering copyright risks.

- **High-quality Service:** We provide 24/7 professional one-to-one technical support, including onsite service and remote assistance via phone and email.

## Conversion Quality Preview

With **AI table recognition, AI layout analysis, and OCR capabilities**, ComPDF Conversion SDK delivers accurate PDF conversion results. Simply select the appropriate conversion parameters based on your document type to achieve accurate document reconstruction. Below, we demonstrate the power of the ComPDF Conversion SDK by converting PDFs to Word, Excel, or searchable PDF files. Contact us to get a demo and experience our product's performance firsthand.

![conversion sdk performance GIF](./Images/conversion%20sdk%20performance%20GIF.gif)

### Convert PDF to Word

ComPDF Conversion SDK accurately restores all content and images, complex structures, paragraph aggregation, natural reading order, text styles, bold formatting, fonts, multi‑column layouts, image-text positioning, ordered lists, and more. Get a fully editable Word document that looks exactly like the original PDF.

![conversion sdk performance GIF](./Images/Performance%20-%20PDF%20to%20Word.png)

### Convert PDF to Excel

Extract standard tables and borderless tables with precision, preserve the content and images inside table cells, and retain text styles such as bold and color. ComPDF Conversion SDK turns PDF tables into fully functional Excel spreadsheets without losing structure or formatting.

![Conversion SDK: PDF to Excel](./Images/Performance%20-%20PDF%20to%20Excel.png)

### Convert Scanned PDF to editable text

Convert scanned documents and scanned PDFs into searchable PDFs while perfectly preserving the original layout and formatting. Every word becomes searchable, locatable, and selectable – ready for copying just like native digital text.

![conversion sdk performance GIF](./Images/Performance%20-%20PDF%20to%20searchable%20PDF.png)

## Requirements

| Platform | System Requirements | Development Environment | Notice                                    |
| -------- | ------------------- | ----------------------- | ----------------------------------------- |
| Linux    | Linux x64           | Node.js 16 or later     | Samples have been tested on Ubuntu 20.04. |

The Node.js SDK uses a Node-API addon packaged with the release bundle. It does not require `ffi-napi` or other runtime FFI packages. No `npm install` step is required when running the bundled demo from the release package.

## How to Run a Demo

**Quick Verification:**

ComPDF Conversion SDK for Node.js provides a demo in the **`samples`** folder. To run the demo:

```shell
cd /path/to/compdfkit_conversion_node
node samples/demo/demo.js
```

The demo converts the bundled sample PDFs under `samples/input_files` to Word, Excel, PowerPoint, CSV, HTML, RTF, image, TXT, JSON, Markdown, searchable PDF, and OFD outputs under `samples/output_files`.

Expected output:

```text
licenseVerify => 0
version => 4.1.0
setDocumentAIModel => 0
pdf to word: result=0, output=...
all conversion tasks finished
```

**Multi-file Demo:**

The sample also supports multi-file conversion. Each worker process initializes the SDK independently.

```shell
cd /path/to/compdfkit_conversion_node
node samples/demo/demo.js \
  --threads 2 \
  samples/input_files/word.pdf \
  samples/input_files/excel.pdf
```

By default, the sample writes conversion results to `samples/output_files`. Use `--output` only when you want to write results to another directory.

The sample uses `samples/license.xml` by default. Override it with `--license` or `COMPDFKIT_LICENSE` when testing another license XML path or license key.

```shell
node samples/demo/demo.js \
  --license /path/to/license.xml \
  samples/input_files/word.pdf
```

The sample loads the packaged DocumentAI model by default:

```text
resource/models/documentai.model
```

Override it with `--model` or `COMPDFKIT_MODEL_PATH`:

```shell
node samples/demo/demo.js \
  --model /path/to/documentai.model \
  --threads 2 \
  samples/input_files/word.pdf 
```

## Integration

### Install the Module

The release package already contains the SDK runtime under `lib/`, so no installation step is required for the bundled samples.

When running samples from the release package, run from the package root directory:

```shell
cd /path/to/compdfkit_conversion_node
node samples/demo/demo.js
```

The sample loads the SDK with:

```js
const sdk = require("../../lib/index.js");
```

### Verify License and Initialize

```js
const sdk = require("./lib/index.js");
const code = sdk.licenseVerify("LICENSE_KEY", "DEVICE_ID", "APP_ID");
sdk.initialize();
```

## License and Free Trial

### Get Free Trial License

[Contact our sales team](https://www.compdf.com/contact-sales?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit) and we'll send you a 30-day free trial license for ComPDF Conversion SDK.

### Get Commercial License

ComPDF Conversion SDK is a commercial SDK that requires a license for application release. Any documents, sample code, or source code distribution from the released package of ComPDF to any third party is prohibited. To get commercial license for ComPDF Conversion SDK, feel free to [contact our sales team](https://www.compdf.com/contact-sales?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit).

For Node.js Conversion SDK, commercial licenses are verified through the SDK license verification API. In development mode, a license is bound to the developer device ID.

### Apply the License Key

If you haven't got a license key, please check out [how to obtain a license key](https://www.compdf.com/contact-sales?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit). ComPDF Conversion SDK currently supports offline authentication to verify license keys.

*Learn more:* [*What is the authentication mechanism of ComPDF's license?*](https://www.compdf.com/faq/authentication-mechanism-of-compdfkit-license?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit)

**Copy the License Key:**

Accurately obtaining the license key is crucial for applying the license.

1. In the email you received, locate the XML file containing the license key.
2. Open the XML file, and determine the license type based on the `<type>` field. If `<type>online</type>` is present, it indicates an online license. If `<type>offline</type>` is present or if the field is absent, it indicates an offline license.
3. Copy the value located at the `LICENSE_KEY` position within the `<key>LICENSE_KEY</key>` field. This is your license key.

**Apply the License Key**

You can perform offline authentication using the following method:

Before using the classes and methods of the ComPDF Conversion SDK in your Node.js project, you need to initialize the SDK with a valid license key.

```js
const sdk = require("./lib/index.js");

const license = "LICENSE_KEY";
const deviceId = "DEVICE_ID";
const appId = "com.example.application";

const code = sdk.licenseVerify(license, deviceId, appId);
if (code !== 0) {
  throw new Error(`license verification failed: ${code}`);
}

sdk.initialize();
```

You can also read license information from environment variables in command-line tools:
    const license = process.env.COMPDFKIT_LICENSE;
    const deviceId = process.env.COMPDFKIT_DEVICE_ID || "";
    const appId = process.env.COMPDFKIT_APP_ID || "com.example.application";

The sample scripts also accept `--license`, `--device-id`, and `--app-id`. When these options are not provided, they read the same environment variables and fall back to local demo values packaged in the samples.

## Developer Guides for All Features

ComPDF Conversion SDK provides a wide range of customizable conversion options, such as whether to include images or annotations in PDF documents during file conversion, enable OCR, perform layout analysis, and more. Explore the [guides](https://www.compdf.com/guides/conversion-sdk/node/overview?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit) for sample code and learn how to customize conversions for the following features.

- Initialize Library Resources
- Set DocumentAI Model
- Get Conversion Progress
- Cancel Conversion Task
- Select Page Range for Conversion
- Conversion Options: Contain Image & Annotation
- Page Layout Mode
- OCR
- Layout Analysis
- Table Recognition
- Use Custom AI Models via Callbacks
- Output Font Option
- Convert PDF to Word
- Convert PDF to Excel
- Convert PDF to PowerPoint
- Convert PDF to HTML
- Convert PDF to CSV
- Convert PDF to Image
- Convert PDF to RTF
- Convert PDF to TXT
- Convert PDF to Searchable PDF
- Convert PDF to OFD
- Releasing Library Resources
- Extract PDF to JSON
- Extract PDF to Markdown

### FAQ

* Does OCR work on x86 architecture?
  Currently, OCR only works on x64 architecture.

* Do Node.js conversion APIs block the event loop?
  Yes. The Node.js SDK uses synchronous conversion APIs. For server workloads, run conversions in worker threads or child processes to avoid blocking the main event loop.

* How should concurrent conversions be handled?
  The release sample `samples/demo/demo.js` uses child processes so each conversion worker has its own SDK initialization and native runtime state.

* Does the Node.js SDK expose custom AI callback hooks?
  The current addon supports progress and cancellation callbacks. The custom AI callback extension points available in the native C/C++ SDK are not exposed by the Node.js addon yet.

* When should SDK resources be released?
  Always call `release()` after conversion work completes. If a DocumentAI model was loaded, call `releaseDocumentAIModel()` before or during cleanup.
- [More FAQ](https://www.compdf.com/faq?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit)

## Changelog

Go to our [changelog](https://www.compdf.com/conversion-sdk/changelog-node?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit) to keep up with the latest updates, improvements, and bug fixes.

## Technical Support

Thanks for your interest in ComPDF Conversion SDK, the easy-to-use and powerful development solution. If you encounter technical questions or bug issues when using ComPDF Conversion SDK, please submit the problem report to the [ComPDF team](mailto:support@compdf.com). More information as follows would help us to solve your problem:

- ComPDF Conversion SDK product and version.
- Your operating system and Node.js version.
- Detailed descriptions of the problem.
- Any other related information, such as an error screenshot.
  
  

Home link: [https://www.compdf.com](https://www.compdf.com/?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit)

Technical Support: [https://www.compdf.com/support](https://www.compdf.com/support?utm_source=github&utm_medium=compdfkit-conversion-sdk-node&utm_campaign=compdfkit_conversion_sdk_node_repo&ref_platform_id=github_compdfkit)

Email: [support@compdf.com](mailto:support@compdf.com)
