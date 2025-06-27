# Function: EnumField()

> **EnumField**\<`confAtom`\>(`props`): `undefined` \| `false` \| `Element`

Defined in: [lib/forms/EnumField.tsx:139](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/EnumField.tsx#L139)

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
