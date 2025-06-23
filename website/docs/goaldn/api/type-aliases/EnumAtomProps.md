# Type Alias: EnumAtomProps\<T, A\>

> **EnumAtomProps**\<`T`, `A`\> = `object` & [`InputLabelProps`](InputLabelProps.md)

Defined in: [lib/state-management/EnumAtom.tsx:145](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/state-management/EnumAtom.tsx#L145)

Props for the EnumAtom component.

## Type declaration

### atom

> **atom**: `A`

The Jotai atom controlling the selection

### badgeClassName?

> `optional` **badgeClassName**: `string`

Additional CSS classes for the badge

### emptyValueLabel?

> `optional` **emptyValueLabel**: `string`

Text to show when no value is selected

### options

> **options**: `T`[]

Available enum options

### raw?

> `optional` **raw**: `boolean`

Whether to render raw text without styling

### textClassName?

> `optional` **textClassName**: `string`

Additional CSS classes for the text

## Type Parameters

### T

`T` *extends* `kindaString` \| `Promise`\<`kindaString`\>

The type of the enum value

### A

`A` *extends* `WritableAtom`\<`T` \| `Promise`\<`T`\>, `any`, `any`\>

The type of the atom
