# Variable: connectedDeviceAtom

> `const` **connectedDeviceAtom**: `PrimitiveAtom`\<`null` \| `Peripheral`\> & `WithInitialValue`\<`null` \| `Peripheral`\>

Defined in: [lib/bluetooth/bluetoothAtoms.ts:35](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/bluetooth/bluetoothAtoms.ts#L35)

Jotai atom storing the currently connected Bluetooth peripheral device.
Initialized as null when no device is connected.
