[**Documentation**](../README.md)

***

[Documentation](../README.md) / SwitchAtom

# Function: SwitchAtom()

> **SwitchAtom**\<`A`\>(`props`): `Element`

Defined in: [lib/components/ui/custom/switch-atom.tsx:33](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/switch-atom.tsx#L33)

A component that renders a switch input bound to a Jotai atom.
The switch state is controlled by the atom's value.

## Type Parameters

### A

`A` *extends* `WritableAtom`\<`boolean` \| `Promise`\<`boolean`\>, `any`, `any`, `A`\>

## Parameters

### props

`SwitchAtomProps`\<`A`\>

The component props

## Returns

`Element`

A switch component with label
