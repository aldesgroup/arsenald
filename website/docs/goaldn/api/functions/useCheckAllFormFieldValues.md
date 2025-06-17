[**Documentation**](../README.md)

***

[Documentation](../README.md) / useCheckAllFormFieldValues

# Function: useCheckAllFormFieldValues()

> **useCheckAllFormFieldValues**\<`Value`\>(`configs`, `predicate`): `boolean`

Defined in: [lib/utils/fields.ts:206](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L206)

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
