---
title: API
order: 1
---

<a name="init"></a>
### [init](#init) `i18next.init(options, callback)`

Initializes the i18next instance.

```js
i18next.init(options, (err, t) => {
  // resources have been loaded
});
```

Please read the [options page](../options/) for details.

<a name="use"></a>
### [use](#use) `i18next.use(module)`

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

<a name="t"></a>
### [t](#t) `i18next.t(key, options)`

The translation function.

Please read the [translate pages](../../translate/) for details.

<a name="exists"></a>
### [exists](#exists) `i18next.exists(key, options)`

Uses the same resolve functionality as the `t` function and returns true if a key exists.

<a name="get-fixed-t"></a>
### [getFixedT](#get-fixed-t) `i18next.getFixedT(lng, ns)`

Returns a `t` function that defaults to given language or namespace.

```js
let de = i18next.getFixedT('de');
de('myKey');

// or fix the defaultNamespace
let anotherNamespace = i18next.getFixedT(null, 'anotherNamespace');
anotherNamespace('anotherNamespaceKey'); // no need to prefix ns i18n.t('anotherNamespace:anotherNamespaceKey');
```

<a name="change-language"></a>
### [changeLanguage](#change-language) `i18next.changeLanguage(lng, callback)`

Changes the language.

```js
i18next.changeLanguage('en', (err, t) => {
  // resources have been loaded
});
```

<a name="load-namespaces"></a>
### [loadNamespaces](#load-namespaces) `i18next.loadNamespaces(ns, callback)`

Loads additional namespaces not defined in init options.

```js
i18next.loadNamespaces('myNamespace', (err, t) => { /* resources have been loaded */ });
i18next.loadNamespaces(['myNamespace1', 'myNamespace2'], (err, t) => { /* resources have been loaded */ });
```

<a name="load-languages"></a>
### [loadLanguages](#load-languages) `i18next.loadLanguages(lngs, callback)`

Loads additional languages not defined in init options.

```js
i18next.loadLanguages('de', (err, t) => { /* resources have been loaded */ });
i18next.loadLanguages(['de', 'fr'], (err, t) => { /* resources have been loaded */ });
```

<a name="load-resources"></a>
### [loadResources](#load-resources) `i18next.loadResources(callback)`

Loads resources on given state. Gets called internal on init, changeLanguage.

<a name="set-default-namespace"></a>
### [setDefaultNamespace](#set-default-namespace) `i18next.setDefaultNamespace(ns)`

Changes the default namespace.

<a name="dir"></a>
### [dir](#dir) `i18next.dir(lng)`

Returns `rtl` or `ltr` depending on languages read direction.

----------

# instance creation

<a name="create-instance"></a>
### [createInstance](#create-instance) `i18next.createInstance(options, callback)`

Creates a new instance.

<a name="clone-instance"></a>
### [cloneInstance](#clone-instance) `i18next.cloneInstance(options, callback)`

Creates a clone of the current instance. Shares store and modules.


-----------

# events

<a name="on-initialized"></a>
### [initialized](#on-initialized) `i18next.on('initialized', function(options) {})`

Gets fired after initialization.

<a name="on-loaded"></a>
### [loaded](#on-loaded) `i18next.on('loaded', function(loaded) {})`

Gets fired on loading resources.

<a name="on-missing-key"></a>
### [missingKey](#on-missing-key) `i18next.on('missingKey', function(lngs, namespace, key, res) {})`

Gets fired on accessing a key not existing.

<a name="on-added"></a>
### [added](#on-added) `i18next.on('added', function(lng, ns) {})`

Gets fired when resources got added.

<a name="on-removed"></a>
### [removed](#on-removed) `i18next.on('removed', function(lng, ns) {})`

Gets fired when resources got removed.

<a name="on-language-changed"></a>
### [languageChanged](#on-language-changed) `i18next.on('languageChanged', function(lng) {})`

Gets fired when changeLanguage got called.


---------

# resource handling

Can be accessed on `i18next` or `i18next.services.resourceStore`

<a name="get-resource"></a>
### [getResource](#get-resource) `i18next.getResource(lng, ns, key, options)`

Gets one value by given key.

<a name="add-resource"></a>
### [addResource](#add-resource) `i18next.addResource(lng, ns, key, value, options)`

Adds one key/value.

<a name="add-resources"></a>
### [addResources](#add-resources) `i18next.addResources(lng, ns, resources)`

Adds multiple key/values.

<a name="add-resource-bundle"></a>
### [addResourceBundle](#add-resource-bundle) `i18next.addResourceBundle(lng, ns, resources, deep, overwrite)`

Adds a complete bundle. Optionally extends existing bundle deep and overwrites existing values.

<a name="has-resource-bundle"></a>
### [hasResourceBundle](#has-resource-bundle) `i18next.hasResourceBundle(lng, ns)`

Checks if a resource bundle exists.

<a name="get-resource-bundle"></a>
### [getResourceBundle](#get-resource-bundle) `i18next.getResourceBundle(lng, ns)`

Returns a resource bundle.

<a name="remove-resource-bundle"></a>
### [removeResourceBundle](#remove-resource-bundle) `i18next.removeResourceBundle(lng, ns)`

Removes an existing bundle.
