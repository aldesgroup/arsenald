# Function: useSetAllAtoms()

> **useSetAllAtoms**\<`Value`\>(`atoms`): (`newValue`) => `void`

Defined in: [lib/state-management/atoms.ts:80](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/state-management/atoms.ts#L80)

Hook that returns a function to set the same value to all provided atoms.

## Type Parameters

### Value

`Value`

The type of the atoms' values.

## Parameters

### atoms

(`undefined` \| `WritableAtom`\<`Value`, `any`, `any`\>)[]

Array of atoms to set values for.

## Returns

A function that sets the provided value to all atoms.

> (`newValue`): `void`

### Parameters

#### newValue

`Value`

### Returns

`void`
