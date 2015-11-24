---
title: API
order: 1
---

## init `i18next.init(options, callback)`

Initializes the i18next instance.

```js
i18next.init(options, (err, t) => {
  // resources have been loaded
});
```

Please read the [options page](../options/) for details.

## use `i18next.use(module)`

Add modules like backend or caching layer to be used.

```js
import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import postProcessor from 'i18next-sprintf-postprocessor';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(Cache)
  .use(LanguageDetector)
  .use(postProcessor)
  .init(options, callback);
```

For details see the documentation of the added module.


## t `i18next.t(key, options)`

The translation function.

Please read the [options page](../options/) for details.

## exists `i18next.exists(key, options)`

Uses the same resolve functionality as the `t` function and returns true if a key exists.

## getFixedT `i18next.getFixedT(lng, ns)`

Returns a `t` function that defaults to given language or namespace.

## changeLanguage `i18next.changeLanguage(lng, callback)`

Changes the language.

```js
i18next.changeLanguage('en', (err, t) => {
  // resources have been loaded
});
```

## loadNamespaces `i18next.loadNamespaces(ns, callback)`

Loads additional namespaces not defined in init options.

## loadResources `i18next.loadResources(callback)`

Loads resources on given state. Gets called internal on init, changeLanguage.

## setDefaultNamespace `i18next.setDefaultNamespace(ns)`

Changes the default namespace.

## dir `i18next.dir(lng)`

Returns `rtl` or `ltr` depending on languages read direction.




createInstance(options, callback)

cloneInstance(options, callback)

on('initialized', function(options) {})

on('loaded', function(loaded) {})

on('missingKey', function(lngs, namespace, key, res) {})

on('added', function(lng, ns) {})

on('removed', function(lng, ns) {})

getResource(lng, ns, key, options)

addResource(lng, ns, key, value, options)

addResources(lng, ns, resources)

addResourceBundle(lng, ns, resources, deep, overwrite)

hasResourceBundle(lng, ns)

getResourceBundle(lng, ns)

removeResourceBundle(lng, ns)
