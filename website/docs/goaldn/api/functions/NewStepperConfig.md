# Function: NewStepperConfig()

> **NewStepperConfig**(`rawLabels`, `startRoute`, `steps`, `endRoute`): `WritableAtom`\<[`stepperConfig`](../type-aliases/stepperConfig.md), \[`SetStateActionWithReset`\<[`stepperConfig`](../type-aliases/stepperConfig.md)\>\], `void`\> & `WithInitialValue`\<[`stepperConfig`](../type-aliases/stepperConfig.md)\>

Defined in: [goaldn/lib/components/ui/custom/stepper.tsx:55](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/stepper.tsx#L55)

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

`WritableAtom`\<[`stepperConfig`](../type-aliases/stepperConfig.md), \[`SetStateActionWithReset`\<[`stepperConfig`](../type-aliases/stepperConfig.md)\>\], `void`\> & `WithInitialValue`\<[`stepperConfig`](../type-aliases/stepperConfig.md)\>

A writable atom containing the stepper configuration
