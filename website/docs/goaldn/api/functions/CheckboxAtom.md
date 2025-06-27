# Function: CheckboxAtom()

> **CheckboxAtom**\<`A`, `B`\>(`props`): `Element`

Defined in: [lib/state-management/CheckboxAtom.tsx:44](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/state-management/CheckboxAtom.tsx#L44)

A checkbox component that integrates with Jotai atoms for state management.
Supports group behavior with associated checkboxes and customizable styling.

## Type Parameters

### A

`A` *extends* `WritableAtom`\<`boolean`, `any`, `any`, `A`\>

The type of the main checkbox atom

### B

`B` *extends* (`undefined` \| `WritableAtom`\<`boolean`, `any`, `any`\>)[]

The type of the array of associated checkbox atoms

## Parameters

### props

[`CheckboxAtomProps`](../type-aliases/CheckboxAtomProps.md)\<`A`, `B`\>

The component props

## Returns

`Element`

A checkbox component with label and optional group behavior
