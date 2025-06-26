# Function: newStepperConfig()

> **newStepperConfig**(`rawLabels`, `startRoute`, `steps`, `endRoute`): `WritableAtom`\<[`StepperConfig`](../type-aliases/StepperConfig.md), \[`SetStateActionWithReset`\<[`StepperConfig`](../type-aliases/StepperConfig.md)\>\], `void`\> & `WithInitialValue`\<[`StepperConfig`](../type-aliases/StepperConfig.md)\>

Defined in: [lib/layout/Stepper.tsx:57](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/layout/Stepper.tsx#L57)

Creates a new stepper configuration atom with reset capability.

## Parameters

### rawLabels

`boolean`

Whether to use raw (untranslated) labels

### startRoute

The initial route to start from

`null` | `string`

### steps

`stepConfig`[]

Array of step configurations

### endRoute

The final route to end at

`null` | `string`

## Returns

`WritableAtom`\<[`StepperConfig`](../type-aliases/StepperConfig.md), \[`SetStateActionWithReset`\<[`StepperConfig`](../type-aliases/StepperConfig.md)\>\], `void`\> & `WithInitialValue`\<[`StepperConfig`](../type-aliases/StepperConfig.md)\>

A writable atom containing the stepper configuration
