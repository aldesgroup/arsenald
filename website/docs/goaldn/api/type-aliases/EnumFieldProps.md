# Type Alias: EnumFieldProps\<confAtom\>

> **EnumFieldProps**\<`confAtom`\> = `object` & [`InputLabelProps`](InputLabelProps.md)

Defined in: [lib/forms/EnumField.tsx:120](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/forms/EnumField.tsx#L120)

Props for the EnumField component.

## Type declaration

### emptyValueLabel?

> `optional` **emptyValueLabel**: `string`

Text to show when no value is selected

### field

> **field**: `confAtom`

The field configuration atom

### valueClassName?

> `optional` **valueClassName**: `string`

Additional CSS classes for the value containers

## Type Parameters

### confAtom

`confAtom` *extends* [`FieldConfigAtom`](FieldConfigAtom.md)\<`number`\>

The type of the field configuration atom
