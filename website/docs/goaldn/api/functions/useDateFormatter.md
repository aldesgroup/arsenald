# Function: useDateFormatter()

> **useDateFormatter**(): (`date?`) => `string`

Defined in: [goaldn/lib/utils/date.ts:12](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/date.ts#L12)

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
