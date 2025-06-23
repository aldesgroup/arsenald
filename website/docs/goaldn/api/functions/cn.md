# Function: cn()

> **cn**(...`inputs`): `string`

Defined in: [lib/base/cn.ts:11](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/base/cn.ts#L11)

Utility function that combines multiple class names and merges Tailwind CSS classes efficiently.
Uses clsx for conditional class names and tailwind-merge to handle Tailwind class conflicts.

## Parameters

### inputs

...`ClassValue`[]

Class names to be combined and merged.

## Returns

`string`

A string of merged class names.
