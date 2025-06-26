# Function: LanguageSwitcherOption\_()

> **LanguageSwitcherOption\_**(`param0`): `object`

Defined in: [lib/navigation/Navigator-options.tsx:55](https://github.com/aldesgroup/goaldn/blob/850e22fffd19501920628173674ada43cba9a29a/lib/navigation/Navigator-options.tsx#L55)

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
