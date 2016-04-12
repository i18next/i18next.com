---
title: Options
order: 2
---

<a name="t-options"></a>
### [t options](#t-options) `i18next.t(key, options)`

<div class="optionstable">

option            | description
----------------- | -----------------
defaultValue      | defaultValue to return if translation not found
count             | count value used for plurals
context           | used for contexts (eg. male|female)
replace           | object with vars for interpolation - optional as you can put them directly in options
lng               | language to use
lngs              | languages to use
fallbackLng       | language to lookup key if not found on set language
ns                | string or array of namespaces
keySeparator      | char to separate keys
nsSeparator       | char to split namespace from key
returnObjects     | accessing an object not a translation string
joinArrays        | char, eg. '\n' that arrays will be joined by
postProcess       | string or array of postProcessors to apply
interpolation     | see interpolation options below

</div>


<a name="init-options"></a>
### [init options](#init-options) `i18next.init(options, callback)`

<div class="optionstable">

option            | default             | description
----------------- | --------------------| -----------------
debug             | false               | logs out more info (console)
initImmediate     | true                | triggers resource loading in init function inside setTimeout (default async behaviour)
resources         | undefined           | resources to initialize with
lng               | undefined           | language to set (disables user language detection)
fallbackLng       | 'dev'               | language to lookup key if not found on set language
ns                | 'translation'       | string or array of namespaces
defaultNS         | 'translation'       | default namespace used if not passed to translation function
fallbackNS        | false               | string or array of namespaces to lookup key if not found
whitelist         | false               | array of allowed languages
lowerCaseLng      | false               | language will be lowercased eg. en-US --> en-us
load              | 'all'               | language codes to lookup, given set language is 'en-US': `'all' --> ['en-US', 'en', 'dev']`, `'currentOnly' --> 'en-US'`, `'languageOnly' --> 'en'`
preload           | false               | array of languages to preload
keySeparator      | '.'                 | char to separate keys
nsSeparator       | ':'                 | char to split namespace from key
pluralSeparator   | '\_'                 | char to split plural from key
contextSeparator  | '\_'                 | char to split context from key
saveMissing       | false               | calls save missing key function on backend if key not found
saveMissingTo     | 'fallback'          | 'current' or 'all'
missingKeyHandler | false               | `function(lng, ns, key, fallbackValue) { }` used for custom  missing key handling (needs saveMissing set to true!)
parseMissingKeyHandler | noop           | function(key) { // return value to display }
appendNamespaceToMissingKey | false     | appends namespace to missing key
postProcess       | false               | string or array of postProcessors to apply per default
returnNull        | true                | allows null values as valid translation
returnEmptyString | true                | allows empty string as valid translation
returnObjects     | false               | allows objects as valid translation result
returnedObjectHandler | noop            | `function(key, value, options) {}` gets called if object was passed in as key but returnObjects was set to false
joinArrays        | false               | char, eg. '\n' that arrays will be joined by
overloadTranslationOptionHandler | function(args) { return { defaultValue: args[1] }; }; | default: sets defaultValue
interpolation     | {...}               | see interpolation options below
detection         | undefined           | options for language detection - see detector documentation
backend           | undefined           | options for backend - see backend documentation
cache             | undefined           | options for cache layer -- see cache documentation

</div>

<div class="optionstable">

<a name="interpolation-options"></a>
#### [interpolation options](#interpolation-options)

option            | default             | description
----------------- | --------------------| -----------------
escapeValue       | true                | escapes passed in values to avoid xss injection
prefix            | '{{'                | prefix for interpolation
suffix            | '}}'                | suffix for interpolation
prefixEscaped     | undefined           | escaped prefix for interpolation (regexSafe)
suffixEscaped     | undefined           | escaped suffix for interpolation (regexSafe)
unescapeSuffix    | undefined           | suffix to unescaped mode
unescapePrefix    | '-'                 | prefix to unescaped mode
nestingPrefix     | '$t('               | prefix for nesting
nestingSuffix     | ')'                 | suffix for nesting
nestingPrefixEscaped     | undefined               | escaped prefix for nesting (regexSafe)
nestingSuffixEscaped     | undefined               | escaped suffix for nesting (regexSafe)
defaultVariables  | undefined           | default variables to use in interpolation replacements

</div>
