# Function: useAllAtomsValues()

> **useAllAtomsValues**\<`Value`\>(`atoms`): (`undefined` \| `Awaited`\<`Value`\>)[]

Defined in: [lib/state-management/atoms.ts:69](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/state-management/atoms.ts#L69)

Hook that returns an array containing the values of all provided atoms.

## Type Parameters

### Value

`Value`

The type of the atoms' values.

## Parameters

### atoms

(`undefined` \| `WritableAtom`\<`Value`, `any`, `any`\>)[]

Array of atoms to get values from.

## Returns

(`undefined` \| `Awaited`\<`Value`\>)[]

Array of atom values.
