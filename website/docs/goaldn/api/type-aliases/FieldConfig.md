# Type Alias: FieldConfig\<Value\>

> **FieldConfig**\<`Value`\> = `object`

Defined in: [lib/forms/fields.ts:48](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L48)

Type definition for a field configuration.

## Type Parameters

### Value

`Value`

## Properties

### decrementDisabled()?

> `optional` **decrementDisabled**: () => `boolean`

Defined in: [lib/forms/fields.ts:56](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L56)

Custom hook to disable a control decreasing the field's value.

#### Returns

`boolean`

***

### disabled()?

> `optional` **disabled**: () => `boolean`

Defined in: [lib/forms/fields.ts:51](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L51)

Custom hook to provide a dynamic value for the `disabled` tag.

#### Returns

`boolean`

***

### effects?

> `optional` **effects**: () => `void`[]

Defined in: [lib/forms/fields.ts:52](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L52)

Array of useEffect functions to apply.

#### Returns

`void`

***

### fieldAtom

> **fieldAtom**: `FieldAtom`\<`Value`\>

Defined in: [lib/forms/fields.ts:49](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L49)

The embedded field to enrich with additional functionality.

***

### incrementDisabled()?

> `optional` **incrementDisabled**: () => `boolean`

Defined in: [lib/forms/fields.ts:57](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L57)

Custom hook to disable a control increasing the field's value.

#### Returns

`boolean`

***

### mandatory?

> `optional` **mandatory**: `boolean` \| () => `boolean`

Defined in: [lib/forms/fields.ts:61](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L61)

Indicates if a non-empty value is expected.

***

### max?

> `optional` **max**: `number`

Defined in: [lib/forms/fields.ts:54](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L54)

A maximum value for a numeric field; a maximum length for a string field.

***

### min?

> `optional` **min**: `number`

Defined in: [lib/forms/fields.ts:53](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L53)

A minimum value for a numeric field; a minimum length for a string field.

***

### options?

> `optional` **options**: [`FieldConfigOption`](FieldConfigOption.md)[]

Defined in: [lib/forms/fields.ts:58](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L58)

Options for a select field.

***

### optionsInfos?

> `optional` **optionsInfos**: `Map`\<`number`, [`FieldConfigOptionInfos`](FieldConfigOptionInfos.md)\>

Defined in: [lib/forms/fields.ts:60](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L60)

Configuring additional behaviours on options passed to a select field.

***

### optionsOnly?

> `optional` **optionsOnly**: `number`[]

Defined in: [lib/forms/fields.ts:59](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L59)

Amongst the given options, which values to allow.

***

### step?

> `optional` **step**: `number`

Defined in: [lib/forms/fields.ts:55](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L55)

A step value for a numeric field.

***

### valid()?

> `optional` **valid**: () => `null` \| [`FieldValueError`](FieldValueError.md)

Defined in: [lib/forms/fields.ts:62](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L62)

Custom hook to provide a way to tell if the field's value is valid.

#### Returns

`null` \| [`FieldValueError`](FieldValueError.md)

***

### visible()?

> `optional` **visible**: () => `boolean`

Defined in: [lib/forms/fields.ts:50](https://github.com/aldesgroup/goaldn/blob/b43e92ae42dcd6febc9c2c8f0742ef8c669d44f6/lib/forms/fields.ts#L50)

Custom hook to condition the rendering of the field.

#### Returns

`boolean`
