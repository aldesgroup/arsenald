# Function: SwitchField()

> **SwitchField**\<`confAtom`\>(`props`): `false` \| `Element`

Defined in: [lib/forms/SwitchField.tsx:33](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/SwitchField.tsx#L33)

A form field component that renders a switch input.
The switch state is controlled by the field configuration atom.

## Type Parameters

### confAtom

`confAtom` *extends* `Atom`\<[`FieldConfig`](../type-aliases/FieldConfig.md)\<`boolean`\>, `confAtom`\>

## Parameters

### props

[`SwitchFieldProps`](../type-aliases/SwitchFieldProps.md)\<`confAtom`\>

The component props

## Returns

`false` \| `Element`

A switch field component with label
