# Function: StringField()

> **StringField**\<`confAtom`, `InputProps`\>(`props`): `false` \| `Element`

Defined in: [lib/forms/StringField.tsx:37](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/StringField.tsx#L37)

A form field component that renders a string input with validation and error handling.
Supports different display modes (input, sheet, report) and handles various value types.

## Type Parameters

### confAtom

`confAtom` *extends* `Atom`\<[`FieldConfig`](../type-aliases/FieldConfig.md)\<`any`\>, `confAtom`\>

### InputProps

`InputProps` *extends* `TextInputProps` & `RefAttributes`\<`TextInput`, `InputProps`\>

## Parameters

### props

[`StringFieldProps`](../type-aliases/StringFieldProps.md)\<`confAtom`, `InputProps`\>

The component props

## Returns

`false` \| `Element`

A string input field with label, validation, and optional unit
