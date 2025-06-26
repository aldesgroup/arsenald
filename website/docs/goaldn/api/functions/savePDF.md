# Function: savePDF()

> **savePDF**(`options`): `Promise`\<`null` \| `string`\>

Defined in: [lib/media/pdf.ts:71](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/media/pdf.ts#L71)

Saves a PDF file generated from the provided options to the device.

## Parameters

### options

[`PDFGenerationOptions`](../type-aliases/PDFGenerationOptions.md)

The options for generating the PDF.

## Returns

`Promise`\<`null` \| `string`\>

A promise that resolves to the file path of the saved PDF, or null if an error occurs.
