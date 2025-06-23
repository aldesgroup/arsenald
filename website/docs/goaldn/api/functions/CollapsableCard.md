# Function: CollapsableCard()

> **CollapsableCard**(`__namedParameters`): `Element`

Defined in: [lib/layout/CardCollapsable.tsx:22](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/layout/CardCollapsable.tsx#L22)

A collapsible card component that can be expanded and collapsed with a header and optional content.
The card supports both controlled (via atom) and uncontrolled state management.

## Parameters

### \_\_namedParameters

#### allowCollapse?

`boolean` = `true`

#### alwaysVisible?

`ReactNode`

#### children

`ReactNode`

#### className?

`string`

#### openAtom?

`WritableAtom`\<`boolean` \| `Promise`\<`boolean`\>, `any`, `any`\>

#### title

`string`

#### withCloseButton?

`boolean`

## Returns

`Element`
