# Initialization

```js
i18n.init({
    // storage
    resStore: undefined,

    // language and namespace
    lng: 'en-US',
    fallbackLng: ['dev'],
    lowerCaseLng: true|false,
    ns: 'translation',
    fallbackNS: ['common'],

    // loading options
    load: 'all|current|unspecific',
    preload: ['de-DE', 'de'],
    lngWhitelist: ['en-US', 'en', 'de-DE', 'de']
    
    // translation processing
    fallbackOnNull: true|false,
    fallbackOnEmpty: true|false,
    fallbackToDefaultNS: true|false,
    returnObjectTrees: true|false,
    objectTreeKeyHandler: undefined,
    postProcess: undefined,
    shortcutFunction: 'sprintf|defaultValue',
    
    // loading from server
    dynamicLoad: true|false,
    resGetPath: 'locales/__lng__/__ns__.json',
    getAsync: true|false,
    
    // post missing to server
    resPostPath: 'locales/add/__lng__/__ns__',
    postAsync: true|false,
    parseMissingKey: undefined,
    missingKeyHandler: sync.postMissing,
    sendMissing: true|false,
    sendMissingTo: 'fallbackcurrent|all'
    sendType: 'POST',

    // options for jquery
    setJqueryExt: true|false,
    selectorAttr: 'data-i18n',
    useDataAttrOptions: true|false,
    defaultValueFromContent: true|false,
    
    // localstorage options
    useLocalStorage: true|false,
    localStorageExpirationTime: 7*24*60*60*1000,

    // cookie options
    useCookie: true|false,
    cookieExpirationTime: undefined,
    cookieName: 'i18next',
    cookieDomain: undefined,

    // language detection options
    detectLngQS: 'setLng',
    detectLngFromLocalStorage: true|false,

    // config of sepparators and prefixes/suffixes
    nsseparator: ':',
    keyseparator: '.',
    interpolationPrefix: '__',
    interpolationSuffix: '__',
    escapeInterpolation: true[false,
    defaultVariables: true|false,
    reusePrefix: '$t(',
    reuseSuffix: ')',
    pluralSuffix: '_plural',
    pluralNotFound: ['plural_not_found', Math.random()].join(''),
    indefiniteSuffix: '_indefinite',
    indefiniteNotFound: ['indefinite_not_found', Math.random()].join(''),
    contextNotFound: ['context_not_found', Math.random()].join(''),

    // debug output
    debug: true|false
}, function(t) {
  /* resources are loaded */
});
```

Complete sample of all init options. Scroll down for more details.

## Set language on init

```javascript
i18n.init({ 
  lng: 'en-US' 
}, function(t) { 
  /* loading done */ 
});
```

> not setting language will trigger language detection

Resources will be resolved in this order:

1. try languageCode plus countryCode, eg. 'en-US'
2. alternative look it up in languageCode only, eg. 'en'
3. finally look it up in definded fallback language, default: 'dev'

If language is not set explicitly i18next tries to detect the user language by:

1. querystring parameter (?setLng=en-US)
2. cookie (i18next)
3. language set in navigator

Change language programatically:

Call function `i18next.setLng(lng, callback)`.

Read out current language set:

Call function `i18next.lng()` returns current lng.
