---
title: Own Plugins
order: 4
---

i18next comes with a lot of modules to enhance the features available. There are modules to:

- load resources, eg. via xhr or from filesystem (node.js)
- cache resources on client, eg. localStorage
- detect user language by querystring, navigator, cookie, ...
- post processors to further manipulate values, eg. to add sprintf support

[Available plugins](ecosystem/#plugins)

The plugins need to support following APIs:

**HINT:** You can provide a singleton or a prototype constructor (prefered for supporting multiple instances of i18next).

<a name="backend"></a>
### [backend](#backend)

Backend plugins are used to load data for i18next.

```js
{
  type: 'backend',
  init: function(services, options) { /* use services and options */ },
  read: function(language, namespace, callback) { /* return resources */ },

  // optional
  readMulti: function(languages, namespaces, callback) { /* return multiple resources - usefull eg. for bundling loading in one xhr request */ },
  create: function(languages, namespace, key, fallbackValue) { /* save the missing translation */ }
}
```

<a name="cache"></a>
### [cache](#cache)

Cache plugins are used to cache resources on consumers.

```js
{
  type: 'cache',
  init: function(services, options) { /* use services and options */ },
  load: function(lngs, callback) { /* load resources for languages */ },
  save: function(store) { /* update cache */ },
}
```

<a name="languageDetector"></a>
### [languageDetector](#languagedetector)

Language Detector plugins are used to detect language in user land.

```js
{
  type: 'languageDetector',
  init: function(services, options) { /* use services and options */ },
  detect: function() { /* return detected language */ },
  cacheUserLanguage: function(lng) { /* cache language */ },
}
```

<a name="postprocessor"></a>
### [post processor](#postprocessor)

Post Processors are used to extend or manipulate the translated values before returning them in `t` function.

(Post Processors do not need to be prototype functions)

```js
{
  type: 'postProcessor',
  name: 'nameOfProcessor',
  process: function(value, key, options, translator) {
    /* return manipulated value */
  }
}
```

<a name="logger"></a>
### [logger](#logger)

Override the built in console logger.

(loggers do not need to be prototype functions)

```js
{
  type: 'logger',

  log: function(args) {},
  warn: function(args) {},
  error: function(args) {}
}
```
