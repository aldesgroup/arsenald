# Function: useCheckAllAtomValues()

> **useCheckAllAtomValues**\<`Value`\>(`atoms`, `predicate`): `boolean`

Defined in: [lib/state-management/atoms.ts:54](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/state-management/atoms.ts#L54)

Hook that checks if a predicate function returns true for all atoms in a list.

## Type Parameters

### Value

`Value`

The type of the atoms' values.

## Parameters

### atoms

(`undefined` \| `WritableAtom`\<`Value`, `any`, `any`\>)[]

Array of atoms to check.

### predicate

(`value?`) => `boolean`

Function to test each atom's value.

## Returns

`boolean`

True if predicate returns true for all atoms.
