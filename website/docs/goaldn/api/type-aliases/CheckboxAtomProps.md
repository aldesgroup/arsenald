# Type Alias: CheckboxAtomProps\<A, B\>

> **CheckboxAtomProps**\<`A`, `B`\> = `object`

Defined in: [lib/state-management/CheckboxAtom.tsx:16](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L16)

Props for the CheckboxAtom component.

## Type Parameters

### A

`A` *extends* `WritableAtom`\<`boolean`, `any`, `any`\>

The type of the main checkbox atom

### B

`B` *extends* (`WritableAtom`\<`boolean`, `any`, `any`\> \| `undefined`)[]

The type of the array of associated checkbox atoms

## Properties

### associated?

> `optional` **associated**: `B`

Defined in: [lib/state-management/CheckboxAtom.tsx:30](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L30)

Array of associated checkbox atoms for group behavior

***

### atom

> **atom**: `A`

Defined in: [lib/state-management/CheckboxAtom.tsx:26](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L26)

The Jotai atom controlling the checkbox state

***

### boxClassName?

> `optional` **boxClassName**: `string`

Defined in: [lib/state-management/CheckboxAtom.tsx:28](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L28)

Additional CSS classes for the checkbox box

***

### className?

> `optional` **className**: `string`

Defined in: [lib/state-management/CheckboxAtom.tsx:18](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L18)

Additional CSS classes for the container

***

### label?

> `optional` **label**: `string`

Defined in: [lib/state-management/CheckboxAtom.tsx:20](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L20)

Text label for the checkbox

***

### labelClassName?

> `optional` **labelClassName**: `string`

Defined in: [lib/state-management/CheckboxAtom.tsx:22](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L22)

Additional CSS classes for the label

***

### labelPrepend?

> `optional` **labelPrepend**: `boolean`

Defined in: [lib/state-management/CheckboxAtom.tsx:24](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/state-management/CheckboxAtom.tsx#L24)

Whether to show the label before the checkbox
