# Function: useSetFormField()

> **useSetFormField**\<`Value`\>(`conf`): (`value`) => `void`

Defined in: [lib/forms/fields.ts:169](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/forms/fields.ts#L169)

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
