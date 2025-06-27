# Function: CombineOptions()

> **CombineOptions**(...`optionFunctions`): [`OptionFunction`](../type-aliases/OptionFunction.md)

Defined in: [lib/navigation/Navigator-options.tsx:21](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/navigation/Navigator-options.tsx#L21)

Combines multiple navigation option functions into a single function.
The resulting function merges all options from the input functions.

## Parameters

### optionFunctions

...[`OptionFunction`](../type-aliases/OptionFunction.md)[]

Array of option functions to combine

## Returns

[`OptionFunction`](../type-aliases/OptionFunction.md)

A new function that combines all input options
