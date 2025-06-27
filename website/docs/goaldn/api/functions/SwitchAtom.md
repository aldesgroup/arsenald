# Function: SwitchAtom()

> **SwitchAtom**\<`A`\>(`props`): `Element`

Defined in: [lib/state-management/SwitchAtom.tsx:34](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/state-management/SwitchAtom.tsx#L34)

A component that renders a switch input bound to a Jotai atom.
The switch state is controlled by the atom's value.

## Type Parameters

### A

`A` *extends* `WritableAtom`\<`boolean` \| `Promise`\<`boolean`\>, `any`, `any`, `A`\>

## Parameters

### props

[`SwitchAtomProps`](../type-aliases/SwitchAtomProps.md)\<`A`\>

The component props

## Returns

`Element`

A switch component with label
