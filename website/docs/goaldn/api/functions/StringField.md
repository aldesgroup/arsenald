# Function: StringField()

> **StringField**\<`confAtom`, `InputProps`\>(`props`): `false` \| `Element`

Defined in: [goaldn/lib/components/ui/custom/string-field.tsx:38](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/string-field.tsx#L38)

A form field component that renders a string input with validation and error handling.
Supports different display modes (input, sheet, report) and handles various value types.

## Type Parameters

### confAtom

`confAtom` *extends* [`FieldConfigAtom`](../type-aliases/FieldConfigAtom.md)\<`any`\>

### InputProps

`InputProps` *extends* `TextInputProps` & `RefAttributes`\<`TextInput`\>

## Parameters

### props

`StringFieldProps`\<`confAtom`, `InputProps`\>

The component props

## Returns

`false` \| `Element`

A string input field with label, validation, and optional unit
