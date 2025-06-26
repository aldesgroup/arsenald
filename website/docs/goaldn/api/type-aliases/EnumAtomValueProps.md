# Type Alias: EnumAtomValueProps\<T, A\>

> **EnumAtomValueProps**\<`T`, `A`\> = `object`

Defined in: [lib/state-management/EnumAtom.tsx:22](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L22)

Props for the EnumAtomValue component.

## Type Parameters

### T

`T` *extends* `kindaString` \| `Promise`\<`kindaString`\>

The type of the enum value

### A

`A` *extends* `WritableAtom`\<`T` \| `Promise`\<`T`\>, `any`, `any`\>

The type of the atom

## Properties

### atom

> **atom**: `A`

Defined in: [lib/state-management/EnumAtom.tsx:26](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L26)

The Jotai atom controlling the selection

***

### badgeClassName?

> `optional` **badgeClassName**: `string`

Defined in: [lib/state-management/EnumAtom.tsx:28](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L28)

Additional CSS classes for the badge

***

### mode?

> `optional` **mode**: [`fieldDisplayMode`](fieldDisplayMode.md)

Defined in: [lib/state-management/EnumAtom.tsx:32](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L32)

The display mode of the component

***

### option

> **option**: `T`

Defined in: [lib/state-management/EnumAtom.tsx:24](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L24)

The enum option value

***

### raw?

> `optional` **raw**: `boolean`

Defined in: [lib/state-management/EnumAtom.tsx:34](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L34)

Whether to render raw text without styling

***

### textClassName?

> `optional` **textClassName**: `string`

Defined in: [lib/state-management/EnumAtom.tsx:30](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L30)

Additional CSS classes for the text
