# Function: StringField()

> **StringField**\<`confAtom`, `InputProps`\>(`props`): `false` \| `Element`

Defined in: [lib/forms/StringField.tsx:37](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/forms/StringField.tsx#L37)

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
