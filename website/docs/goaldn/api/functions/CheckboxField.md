# Function: CheckboxField()

> **CheckboxField**\<`confAtom`\>(`props`): `false` \| `Element`

Defined in: [lib/forms/CheckboxField.tsx:40](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/CheckboxField.tsx#L40)

A checkbox component that integrates with form-atoms for form state management.
Supports group behavior with associated fields and customizable styling.

## Type Parameters

### confAtom

`confAtom` *extends* `Atom`\<[`FieldConfig`](../type-aliases/FieldConfig.md)\<`boolean`\>, `confAtom`\>

The type of the field configuration atom

## Parameters

### props

[`CheckboxFieldProps`](../type-aliases/CheckboxFieldProps.md)\<`confAtom`\>

The component props

## Returns

`false` \| `Element`

A checkbox component with label and optional group behavior
