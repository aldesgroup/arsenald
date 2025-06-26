# Function: useDateFormatter()

> **useDateFormatter**(): (`date?`) => `string`

Defined in: [lib/utils/date.ts:13](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/utils/date.ts#L13)

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
