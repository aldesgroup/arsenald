# Function: useTranslator()

> **useTranslator**(): (`label?`) => `object`

Defined in: [lib/settings/i18n.ts:149](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/settings/i18n.ts#L149)

Main translating function hook.

## Returns

A translation function that returns the translation found for the current language and route,
else it returns the provided key.

> (`label?`): `object`

### Parameters

#### label?

`string`

### Returns

`object`

#### missing

> **missing**: `boolean` = `false`

#### translation

> **translation**: `undefined` \| `string` = `label`
