# Function: TitleOption()

> **TitleOption**(`title`, `params?`): [`OptionFunction`](../type-aliases/OptionFunction.md)

Defined in: [lib/navigation/Navigator-options.tsx:87](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/navigation/Navigator-options.tsx#L87)

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
