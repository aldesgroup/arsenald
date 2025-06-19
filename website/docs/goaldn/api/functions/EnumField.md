# Function: EnumField()

> **EnumField**\<`confAtom`\>(`props`): `undefined` \| `false` \| `Element`

Defined in: [goaldn/lib/components/ui/custom/enum-field.tsx:134](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/enum-field.tsx#L134)

A component that renders a group of enum options with selection functionality.
Supports different display modes and integrates with form-atoms.

## Type Parameters

### confAtom

`confAtom` *extends* [`FieldConfigAtom`](../type-aliases/FieldConfigAtom.md)\<`number`\>

The type of the field configuration atom

## Parameters

### props

`EnumFieldProps`\<`confAtom`\>

The component props

## Returns

`undefined` \| `false` \| `Element`

A view containing the enum options and label
