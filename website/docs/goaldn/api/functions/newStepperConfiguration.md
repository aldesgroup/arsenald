# Function: newStepperConfiguration()

> **newStepperConfiguration**(`rawLabels`, `startRoute`, `steps`, `endRoute`): `WritableAtom`\<[`StepperConfiguration`](../type-aliases/StepperConfiguration.md), \[`SetStateActionWithReset`\<[`StepperConfiguration`](../type-aliases/StepperConfiguration.md)\>\], `void`\> & `WithInitialValue`\<[`StepperConfiguration`](../type-aliases/StepperConfiguration.md)\>

Defined in: [lib/layout/Stepper.tsx:57](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/layout/Stepper.tsx#L57)

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

`WritableAtom`\<[`StepperConfiguration`](../type-aliases/StepperConfiguration.md), \[`SetStateActionWithReset`\<[`StepperConfiguration`](../type-aliases/StepperConfiguration.md)\>\], `void`\> & `WithInitialValue`\<[`StepperConfiguration`](../type-aliases/StepperConfiguration.md)\>

A writable atom containing the stepper configuration
