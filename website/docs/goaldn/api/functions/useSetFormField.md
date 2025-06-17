[**Documentation**](../README.md)

***

[Documentation](../README.md) / useSetFormField

# Function: useSetFormField()

> **useSetFormField**\<`Value`\>(`conf`): (`value`) => `void`

Defined in: [lib/utils/fields.ts:160](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L160)

Hook to set the value of a form field.

## Type Parameters

### Value

`Value`

## Parameters

### conf

[`FieldConfigAtom`](../type-aliases/FieldConfigAtom.md)\<`Value`\>

The field configuration atom.

## Returns

A function to set the value of the form field.

> (`value`): `void`

A function for changing the value of a field. This will trigger a `"change"`
validation event.

### Parameters

#### value

The new value of the field

*typeof* `RESET` | `Value` | (`prev`) => `Value`

### Returns

`void`
