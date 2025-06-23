# Type Alias: StringAtomProps\<A, InputProps\>

> **StringAtomProps**\<`A`, `InputProps`\> = `object` & [`InputLabelProps`](InputLabelProps.md) & `InputProps`

Defined in: [lib/state-management/StringAtom.tsx:13](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/state-management/StringAtom.tsx#L13)

Props for the StringAtom component.
Extends InputLabelProps and InputProps with additional string-specific properties.

## Type declaration

### atom

> **atom**: `A`

The writable atom to bind to

### clearDefault?

> `optional` **clearDefault**: `boolean`

If true, clears the value if it matches GOALD_DEFAULT_STRING

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

### A

`A` *extends* `WritableAtom`\<`any` \| `Promise`\<`any`\>, `any`, `any`\>

### InputProps

`InputProps` *extends* `React.ComponentProps`\<*typeof* `Input`\>
