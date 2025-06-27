# Function: useColorScheme()

> **useColorScheme**(): `object`

Defined in: [lib/styling/useColorScheme.ts:14](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/styling/useColorScheme.ts#L14)

Custom hook that provides the current color scheme and utilities to change it.
Wraps the nativewind useColorScheme hook and ensures a default of 'dark'.

## Returns

`object`

An object containing:
  - colorScheme: The current color scheme ('light' or 'dark')
  - isDarkColorScheme: Boolean indicating if the scheme is dark
  - setColorScheme: Function to set the color scheme
  - toggleColorScheme: Function to toggle between light and dark

### colorScheme

> **colorScheme**: `"light"` \| `"dark"`

### isDarkColorScheme

> **isDarkColorScheme**: `boolean`

### setColorScheme()

> **setColorScheme**: (`scheme`) => `void`

#### Parameters

##### scheme

`"light"` | `"dark"` | `"system"`

#### Returns

`void`

### toggleColorScheme()

> **toggleColorScheme**: () => `void`

#### Returns

`void`
