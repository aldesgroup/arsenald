# Function: savePDF()

> **savePDF**(`options`): `Promise`\<`null` \| `string`\>

Defined in: [goaldn/lib/utils/pdf.ts:82](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/pdf.ts#L82)

Saves a PDF file generated from the provided options to the device.

## Parameters

### options

[`PDFGenerationOptions`](../type-aliases/PDFGenerationOptions.md)

The options for generating the PDF.

## Returns

`Promise`\<`null` \| `string`\>

A promise that resolves to the file path of the saved PDF, or null if an error occurs.
