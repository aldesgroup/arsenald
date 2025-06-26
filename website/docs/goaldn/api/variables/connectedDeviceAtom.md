# Variable: connectedDeviceAtom

> `const` **connectedDeviceAtom**: `PrimitiveAtom`\<`null` \| `Peripheral`\> & `WithInitialValue`\<`null` \| `Peripheral`\>

Defined in: [lib/bluetooth/bluetoothAtoms.ts:35](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/bluetooth/bluetoothAtoms.ts#L35)

Jotai atom storing the currently connected Bluetooth peripheral device.
Initialized as null when no device is connected.
