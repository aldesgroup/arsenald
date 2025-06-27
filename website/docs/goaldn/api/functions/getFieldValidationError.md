# Function: getFieldValidationError()

> **getFieldValidationError**\<`Value`\>(`fieldConfAtom`): `null` \| [`FieldValueError`](../type-aliases/FieldValueError.md)

Defined in: [lib/forms/fields.ts:103](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L103)

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
