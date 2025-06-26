# Function: useSetAllAtoms()

> **useSetAllAtoms**\<`Value`\>(`atoms`): (`newValue`) => `void`

Defined in: [lib/state-management/atoms.ts:80](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/atoms.ts#L80)

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
