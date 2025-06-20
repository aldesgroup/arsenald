# Function: LanguageSwitcherOption\_()

> **LanguageSwitcherOption\_**(`param0`): `object`

Defined in: [goaldn/lib/components/app/navigation/Navigator-options.tsx:51](https://github.com/aldesgroup/goaldn/blob/6a7943d02984b1a6b41d76a3a483a1484b644076/lib/components/app/navigation/Navigator-options.tsx#L51)

Navigation options to display the language switcher in the header.

## Parameters

### param0

Navigation object

#### navigation

`any`

## Returns

Navigation options with language switcher

### headerRight()

> **headerRight**: () => `Element` = `LanguageSwitcher`

LanguageSwitcher component allows users to cycle through available languages.
Displays the current language and, if not in production, an environment indicator.

#### Returns

`Element`

A touchable component for switching languages, showing the current language and environment.
