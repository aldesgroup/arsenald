# Type Alias: ScaledTooltipProps

> **ScaledTooltipProps** = `Partial`\<`Omit`\<[`TooltipProps`](TooltipProps.md), `"trigger"`\>\> & `object`

Defined in: [lib/layout/ScaledTooltip.tsx:10](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/layout/ScaledTooltip.tsx#L10)

Props for the ScaledTooltip component.
Extends TooltipProps but omits the trigger property and adds icon-specific properties.

## Type declaration

### Icon

> **Icon**: `LucideIcon`

The Lucide icon component to use as the tooltip trigger

### iconColor

> **iconColor**: `string`

The color of the icon

### iconSize?

> `optional` **iconSize**: `number`

The base size of the icon

### iconSizeMax?

> `optional` **iconSizeMax**: `number`

The maximum size the icon can scale to

### translateX?

> `optional` **translateX**: `number`

The horizontal translation offset
