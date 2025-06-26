# Function: CombineOptions()

> **CombineOptions**(...`optionFunctions`): [`OptionFunction`](../type-aliases/OptionFunction.md)

Defined in: [lib/navigation/Navigator-options.tsx:21](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/navigation/Navigator-options.tsx#L21)

Combines multiple navigation option functions into a single function.
The resulting function merges all options from the input functions.

## Parameters

### optionFunctions

...[`OptionFunction`](../type-aliases/OptionFunction.md)[]

Array of option functions to combine

## Returns

[`OptionFunction`](../type-aliases/OptionFunction.md)

A new function that combines all input options
