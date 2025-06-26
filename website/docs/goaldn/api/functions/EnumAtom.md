# Function: EnumAtom()

> **EnumAtom**\<`T`, `A`\>(`props`): `Element`

Defined in: [lib/state-management/EnumAtom.tsx:171](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/EnumAtom.tsx#L171)

A component that renders a group of enum options with selection functionality.
Supports different display modes and integrates with Jotai atoms.

## Type Parameters

### T

`T` *extends* `kindaString` \| `Promise`\<`kindaString`\>

The type of the enum value

### A

`A` *extends* `WritableAtom`\<`T` \| `Promise`\<`T`\>, `any`, `any`, `A`\>

The type of the atom

## Parameters

### props

[`EnumAtomProps`](../type-aliases/EnumAtomProps.md)\<`T`, `A`\>

The component props

## Returns

`Element`

A view containing the enum options and label
