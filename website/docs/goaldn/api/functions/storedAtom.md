# Function: storedAtom()

> **storedAtom**\<`T`\>(`key`, `defaultValue`): `WritableAtom`\<`T` \| `Promise`\<`T`\>, \[`SetStateActionWithReset`\<`T` \| `Promise`\<`T`\>\>\], `Promise`\<`void`\>\>

Defined in: [goaldn/lib/utils/atoms.ts:17](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/atoms.ts#L17)

Creates a Jotai atom that persists its value in AsyncStorage.

## Type Parameters

### T

`T`

The type of the atom's value.

## Parameters

### key

`string`

The storage key to use for persistence.

### defaultValue

`T`

The default value for the atom.

## Returns

`WritableAtom`\<`T` \| `Promise`\<`T`\>, \[`SetStateActionWithReset`\<`T` \| `Promise`\<`T`\>\>\], `Promise`\<`void`\>\>

A Jotai atom that persists its value.
