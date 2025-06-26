# Function: useFormField()

> **useFormField**\<`Value`\>(`conf`): \[`Value`, (`value`) => `void`\]

Defined in: [lib/forms/fields.ts:182](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/forms/fields.ts#L182)

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
