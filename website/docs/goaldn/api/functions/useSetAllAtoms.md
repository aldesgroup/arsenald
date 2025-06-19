# Function: useSetAllAtoms()

> **useSetAllAtoms**\<`Value`\>(`atoms`): (`newValue`) => `void`

Defined in: [goaldn/lib/utils/atoms.ts:75](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/atoms.ts#L75)

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
