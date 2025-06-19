# Function: TitleOption()

> **TitleOption**(`title`, `params?`): [`OptionFunction`](../type-aliases/OptionFunction.md)

Defined in: [goaldn/lib/components/app/navigation/Navigator-options.tsx:80](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/app/navigation/Navigator-options.tsx#L80)

Creates navigation options for a screen with a title and optional close icon.

## Parameters

### title

`string`

The title to display in the header

### params?

Optional parameters for additional configuration

#### quitBackToRoot?

`boolean`

Whether to navigate to root when closing

#### quitToScreen?

`string`

Screen to navigate to when closing

#### removeBackButton?

`boolean`

Whether to hide the back button

#### withCloseIcon?

`boolean`

Whether to show a close icon

## Returns

[`OptionFunction`](../type-aliases/OptionFunction.md)

Navigation options with title and optional close icon
