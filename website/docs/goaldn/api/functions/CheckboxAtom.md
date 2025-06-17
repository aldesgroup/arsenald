[**Documentation**](../README.md)

***

[Documentation](../README.md) / CheckboxAtom

# Function: CheckboxAtom()

> **CheckboxAtom**\<`A`, `B`\>(`props`): `Element`

Defined in: [lib/components/ui/custom/checkbox-atom.tsx:42](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/ui/custom/checkbox-atom.tsx#L42)

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

`CheckboxAtomProps`\<`A`, `B`\>

The component props

## Returns

`Element`

A checkbox component with label and optional group behavior
