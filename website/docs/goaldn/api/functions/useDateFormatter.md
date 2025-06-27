# Function: useDateFormatter()

> **useDateFormatter**(): (`date?`) => `string`

Defined in: [lib/utils/date.ts:13](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/utils/date.ts#L13)

Hook that returns a date formatter function based on the current language setting.
Returns an English formatter if language is 'en', otherwise returns a French formatter.

## Returns

A function that formats dates in the format 'MM/DD/YYYY' for English or 'DD/MM/YYYY' for French.

> (`date?`): `string`

### Parameters

#### date?

`number` | `Date`

### Returns

`string`
