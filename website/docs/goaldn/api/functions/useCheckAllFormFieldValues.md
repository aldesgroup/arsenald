# Function: useCheckAllFormFieldValues()

> **useCheckAllFormFieldValues**\<`Value`\>(`configs`, `predicate`): `boolean`

Defined in: [lib/forms/fields.ts:219](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L219)

Hook to check that a predicate function returns true for all the form fields of the given list.

## Type Parameters

### Value

`Value`

## Parameters

### configs

[`FieldConfigAtom`](../type-aliases/FieldConfigAtom.md)\<`Value`\>[]

The list of field configuration atoms.

### predicate

(`value`) => `boolean`

The predicate function to check.

## Returns

`boolean`

True if the predicate returns true for all fields.
