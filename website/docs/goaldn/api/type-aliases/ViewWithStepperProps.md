# Type Alias: ViewWithStepperProps

> **ViewWithStepperProps** = `Partial`\<`Omit`\<[`ViewWithFooterProps`](ViewWithFooterProps.md), `"leftButtonOnPress"` \| `"rightButtonOnPress"`\>\> & [`StepperProps`](StepperProps.md) & `object`

Defined in: [lib/layout/ViewWithStepper.tsx:14](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/layout/ViewWithStepper.tsx#L14)

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
