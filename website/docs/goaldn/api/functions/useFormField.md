# Function: useFormField()

> **useFormField**\<`Value`\>(`conf`): \[`Value`, (`value`) => `void`\]

Defined in: [lib/forms/fields.ts:182](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L182)

Hook to get and set the value of a form field, similar to useState.

## Type Parameters

### Value

`Value`

## Parameters

### conf

[`FieldConfigAtom`](../type-aliases/FieldConfigAtom.md)\<`Value`\>

The field configuration atom.

## Returns

\[`Value`, (`value`) => `void`\]

A tuple containing the value and a function to set the value.
