# Function: useCheckAllAtomValues()

> **useCheckAllAtomValues**\<`Value`\>(`atoms`, `predicate`): `boolean`

Defined in: [lib/state-management/atoms.ts:54](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/atoms.ts#L54)

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
