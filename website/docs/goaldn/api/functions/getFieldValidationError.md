# Function: getFieldValidationError()

> **getFieldValidationError**\<`Value`\>(`fieldConfAtom`): `null` \| [`FieldValueError`](../type-aliases/FieldValueError.md)

Defined in: [goaldn/lib/utils/fields.ts:96](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L96)

Hook to check if a particular field is valid, using the field's configured 'valid' custom hook,
or the field's configured basic constraints. Returns null if valid, the validation error otherwise.

## Type Parameters

### Value

`Value`

## Parameters

### fieldConfAtom

[`FieldConfigAtom`](../type-aliases/FieldConfigAtom.md)\<`Value`\>

The field configuration atom.

## Returns

`null` \| [`FieldValueError`](../type-aliases/FieldValueError.md)

The validation error, or null if valid.
