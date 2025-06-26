# Function: useCheckSomeFormFieldValue()

> **useCheckSomeFormFieldValue**\<`Value`\>(`configs`, `predicate`): `boolean`

Defined in: [lib/forms/fields.ts:204](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/forms/fields.ts#L204)

Hook to check that a predicate function returns true for at least 1 form field of the given list.

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

True if the predicate returns true for at least one field.
