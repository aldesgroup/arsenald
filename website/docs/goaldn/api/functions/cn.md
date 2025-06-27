# Function: cn()

> **cn**(...`inputs`): `string`

Defined in: [lib/base/cn.ts:11](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/base/cn.ts#L11)

Utility function that combines multiple class names and merges Tailwind CSS classes efficiently.
Uses clsx for conditional class names and tailwind-merge to handle Tailwind class conflicts.

## Parameters

### inputs

...`ClassValue`[]

Class names to be combined and merged.

## Returns

`string`

A string of merged class names.
