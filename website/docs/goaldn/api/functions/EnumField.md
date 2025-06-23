# Function: EnumField()

> **EnumField**\<`confAtom`\>(`props`): `undefined` \| `false` \| `Element`

Defined in: [lib/forms/EnumField.tsx:139](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/forms/EnumField.tsx#L139)

A component that renders a group of enum options with selection functionality.
Supports different display modes and integrates with form-atoms.

## Type Parameters

### confAtom

`confAtom` *extends* `Atom`\<[`FieldConfig`](../type-aliases/FieldConfig.md)\<`number`\>, `confAtom`\>

The type of the field configuration atom

## Parameters

### props

[`EnumFieldProps`](../type-aliases/EnumFieldProps.md)\<`confAtom`\>

The component props

## Returns

`undefined` \| `false` \| `Element`

A view containing the enum options and label
