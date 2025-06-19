# Function: EnumAtom()

> **EnumAtom**\<`T`, `A`\>(`props`): `Element`

Defined in: [goaldn/lib/components/ui/custom/enum-atom.tsx:167](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/enum-atom.tsx#L167)

A component that renders a group of enum options with selection functionality.
Supports different display modes and integrates with Jotai atoms.

## Type Parameters

### T

`T` *extends* `kindaString` \| `Promise`\<`kindaString`\>

The type of the enum value

### A

`A` *extends* `WritableAtom`\<`T` \| `Promise`\<`T`\>, `any`, `any`\>

The type of the atom

## Parameters

### props

`EnumAtomProps`\<`T`, `A`\>

The component props

## Returns

`Element`

A view containing the enum options and label
