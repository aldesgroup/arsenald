# Function: CheckboxField()

> **CheckboxField**\<`confAtom`\>(`props`): `false` \| `Element`

Defined in: [lib/forms/CheckboxField.tsx:40](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/forms/CheckboxField.tsx#L40)

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
