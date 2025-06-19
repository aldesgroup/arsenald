# Function: StringAtom()

> **StringAtom**\<`A`, `InputProps`\>(`props`): `Element`

Defined in: [goaldn/lib/components/ui/custom/string-atom.tsx:38](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/string-atom.tsx#L38)

A component that renders a string input field bound to a Jotai atom.
Supports different display modes (input, sheet, report) and handles various value types.

## Type Parameters

### A

`A` *extends* `WritableAtom`\<`any`, `any`, `any`\>

### InputProps

`InputProps` *extends* `TextInputProps` & `RefAttributes`\<`TextInput`\>

## Parameters

### props

`StringAtomProps`\<`A`, `InputProps`\>

The component props

## Returns

`Element`

A string input component with label and optional unit
