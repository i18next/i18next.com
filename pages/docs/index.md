---
title: Introduction
order: 0
---


## Getting started


### Adding plugins
```js
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import sprintf from 'i18next-sprintf-postprocessor';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(XHR) // or any other backend implementation
  .use(Cache) // or any other cache implementation
  .use(LanguageDetector) // or any other implementation
  .use(sprintf); // or any other post processor
```

### Init

```js
i18next.init(options, callback);

// this are the defaults, override needed options
i18next.init({
  debug: true,

  ns: 'translation',
  fallbackLng: 'dev',
  fallbackNS : false, // string or array of namespaces

  whitelist: false, // array with whitelisted languages
  load: 'all', // | currentOnly | languageOnly
  preload: false, // array with preload languages

  keySeparator: '.',
  nsSeparator: ':',

  saveMissing: false, // enable to send missing values
  saveMissingTo: 'fallback', // 'current' || 'all'
  missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling

  postProcess: false, // string or array of postProcessor names
  returnNull: true, // allows null value as valid translation
  returnEmptyString: true, // allows empty string value as valid translation
  returnObjects: false,
  joinArrays: false, // or string to join array
  returnedObjectHandler: noop, // function(key, value, options) triggered if key returns object but returnObjects is set to false
  parseMissingKeyHandler: noop, // function(key) parsed a key that was not found in t() before returning
  appendNamespaceToMissingKey: false,

  // behaviour on calling t with more than one argument
  overloadTranslationOptionHandler: function(args) {
    return { defaultValue: args[1] };
  },

  interpolation: {
    escapeValue: false,
    prefix: '{{',
    suffix: '}}',
    // prefixEscaped: '{{',
    // suffixEscaped: '}}',
    // unescapeSuffix: '',
    unescapePrefix: '-',

    nestingPrefix: '$t(',
    nestingSuffix: ')',
    // nestingPrefixEscaped: '$t(',
    // nestingSuffixEscaped: ')',
    defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
  },

  // optional language detection options
  detection: {},

  // optional backend options
  backend: {},

  // optional cache options
  cache: {}
});
```
