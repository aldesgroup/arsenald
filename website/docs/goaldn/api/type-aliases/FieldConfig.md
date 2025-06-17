[**Documentation**](../README.md)

***

[Documentation](../README.md) / FieldConfig

# Type Alias: FieldConfig\<Value\>

> **FieldConfig**\<`Value`\> = `object`

Defined in: [lib/utils/fields.ts:44](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L44)

Type definition for a field configuration.

## Type Parameters

### Value

`Value`

## Properties

### decrementDisabled()?

> `optional` **decrementDisabled**: () => `boolean`

Defined in: [lib/utils/fields.ts:52](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L52)

Custom hook to disable a control decreasing the field's value.

#### Returns

`boolean`

***

### disabled()?

> `optional` **disabled**: () => `boolean`

Defined in: [lib/utils/fields.ts:47](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L47)

Custom hook to provide a dynamic value for the `disabled` tag.

#### Returns

`boolean`

***

### effects?

> `optional` **effects**: () => `void`[]

Defined in: [lib/utils/fields.ts:48](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L48)

Array of useEffect functions to apply.

#### Returns

`void`

***

### fieldAtom

> **fieldAtom**: `FieldAtom`\<`Value`\>

Defined in: [lib/utils/fields.ts:45](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L45)

The embedded field to enrich with additional functionality.

***

### incrementDisabled()?

> `optional` **incrementDisabled**: () => `boolean`

Defined in: [lib/utils/fields.ts:53](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L53)

Custom hook to disable a control increasing the field's value.

#### Returns

`boolean`

***

### mandatory?

> `optional` **mandatory**: `boolean` \| () => `boolean`

Defined in: [lib/utils/fields.ts:57](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L57)

Indicates if a non-empty value is expected.

***

### max?

> `optional` **max**: `number`

Defined in: [lib/utils/fields.ts:50](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L50)

A maximum value for a numeric field; a maximum length for a string field.

***

### min?

> `optional` **min**: `number`

Defined in: [lib/utils/fields.ts:49](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L49)

A minimum value for a numeric field; a minimum length for a string field.

***

### options?

> `optional` **options**: [`FieldConfigOption`](FieldConfigOption.md)[]

Defined in: [lib/utils/fields.ts:54](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L54)

Options for a select field.

***

### optionsInfos?

> `optional` **optionsInfos**: `Map`\<`number`, [`FieldConfigOptionInfos`](FieldConfigOptionInfos.md)\>

Defined in: [lib/utils/fields.ts:56](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L56)

Configuring additional behaviours on options passed to a select field.

***

### optionsOnly?

> `optional` **optionsOnly**: `number`[]

Defined in: [lib/utils/fields.ts:55](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L55)

Amongst the given options, which values to allow.

***

### step?

> `optional` **step**: `number`

Defined in: [lib/utils/fields.ts:51](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L51)

A step value for a numeric field.

***

### valid()?

> `optional` **valid**: () => `null` \| [`FieldValueError`](FieldValueError.md)

Defined in: [lib/utils/fields.ts:58](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L58)

Custom hook to provide a way to tell if the field's value is valid.

#### Returns

`null` \| [`FieldValueError`](FieldValueError.md)

***

### visible()?

> `optional` **visible**: () => `boolean`

Defined in: [lib/utils/fields.ts:46](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/utils/fields.ts#L46)

Custom hook to condition the rendering of the field.

#### Returns

`boolean`
