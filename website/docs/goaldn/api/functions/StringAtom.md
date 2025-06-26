# Function: StringAtom()

> **StringAtom**\<`A`, `InputProps`\>(`props`): `Element`

Defined in: [lib/state-management/StringAtom.tsx:38](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/StringAtom.tsx#L38)

A component that renders a string input field bound to a Jotai atom.
Supports different display modes (input, sheet, report) and handles various value types.

## Type Parameters

### A

`A` *extends* `WritableAtom`\<`any`, `any`, `any`, `A`\>

### InputProps

`InputProps` *extends* `TextInputProps` & `RefAttributes`\<`TextInput`, `InputProps`\>

## Parameters

### props

[`StringAtomProps`](../type-aliases/StringAtomProps.md)\<`A`, `InputProps`\>

The component props

## Returns

`Element`

A string input component with label and optional unit
