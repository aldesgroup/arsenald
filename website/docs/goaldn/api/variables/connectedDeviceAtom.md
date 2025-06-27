# Variable: connectedDeviceAtom

> `const` **connectedDeviceAtom**: `PrimitiveAtom`\<`null` \| `Peripheral`\> & `WithInitialValue`\<`null` \| `Peripheral`\>

Defined in: [lib/bluetooth/bluetoothAtoms.ts:35](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/bluetooth/bluetoothAtoms.ts#L35)

Jotai atom storing the currently connected Bluetooth peripheral device.
Initialized as null when no device is connected.
