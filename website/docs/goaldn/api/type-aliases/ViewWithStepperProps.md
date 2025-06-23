# Type Alias: ViewWithStepperProps

> **ViewWithStepperProps** = `Partial`\<`Omit`\<[`ViewWithFooterProps`](ViewWithFooterProps.md), `"leftButtonOnPress"` \| `"rightButtonOnPress"`\>\> & [`StepperProps`](StepperProps.md) & `object`

Defined in: [lib/layout/ViewWithStepper.tsx:14](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/layout/ViewWithStepper.tsx#L14)

Props for the ViewWithStepper component.
Extends ViewWithFooter props but removes leftButtonOnPress and rightButtonOnPress,
as these are handled by the stepper navigation.

## Type declaration

### beforeNextStep()?

> `optional` **beforeNextStep**: () => `void`

#### Returns

`void`

### beforePreviousStep()?

> `optional` **beforePreviousStep**: () => `void`

#### Returns

`void`
