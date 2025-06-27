# Function: useAllAtomsValues()

> **useAllAtomsValues**\<`Value`\>(`atoms`): (`undefined` \| `Awaited`\<`Value`\>)[]

Defined in: [lib/state-management/atoms.ts:69](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/state-management/atoms.ts#L69)

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
