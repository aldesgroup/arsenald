[**Documentation**](../README.md)

***

[Documentation](../README.md) / CloseIconOption

# Function: CloseIconOption()

> **CloseIconOption**(`quitToScreen?`, `quitBackToRoot?`): (`__namedParameters`) => `object`

Defined in: [lib/components/app/navigation/Navigator-options.tsx:36](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/app/navigation/Navigator-options.tsx#L36)

Creates navigation options to show a close (X) icon in the header.
The icon can navigate to a specific screen, back to root, or just go back.

## Parameters

### quitToScreen?

`string`

Optional screen name to navigate to when closing

### quitBackToRoot?

`boolean`

Whether to navigate back to root when closing

## Returns

Navigation options with close icon configuration

> (`__namedParameters`): `object`

### Parameters

#### \_\_namedParameters

##### navigation

`any`

### Returns

`object`

#### headerBackVisible

> **headerBackVisible**: `boolean` = `false`

#### headerRight()

> **headerRight**: () => `Element`

##### Returns

`Element`
