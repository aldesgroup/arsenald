# Type Alias: StringFieldProps\<T, InputProps\>

> **StringFieldProps**\<`T`, `InputProps`\> = `object` & [`InputLabelProps`](InputLabelProps.md) & `InputProps`

Defined in: [lib/forms/StringField.tsx:15](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/StringField.tsx#L15)

Props for the StringField component.
Extends InputLabelProps and InputProps with additional string-specific properties.

## Type declaration

### field

> **field**: `T`

The field configuration atom

### inputClassName?

> `optional` **inputClassName**: `string`

Additional CSS classes for the input

### placeholder?

> `optional` **placeholder**: `string`

The placeholder text for the input

### placeholderRaw?

> `optional` **placeholderRaw**: `boolean`

Whether to use raw (untranslated) placeholder text

### unit?

> `optional` **unit**: `string`

Text to display after the value (not translated)

## Type Parameters

### T

`T` *extends* [`FieldConfigAtom`](FieldConfigAtom.md)\<`any`\>

### InputProps

`InputProps` *extends* `React.ComponentProps`\<*typeof* `Input`\>
