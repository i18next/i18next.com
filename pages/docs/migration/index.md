---
title: Migration Guide
order: 10
---

<a name="v1-11-x--v2-0-0"></a>
### [v1.11.x to v2.0.0](#v1-11-x--v2-0-0)

While v2.0.0 is a full rewrite of the old codebase it should be possible to run in your app
without completely rewrite your integration.


<a name="v1-11-x--v2-0-0-gs"></a>
### [Getting started](#v1-11-x--v2-0-0-gs)

The new version does not come with backend, cache and user language detection built in. i18next is more a core library that can be extended with modules on demand. This way it can be seamlessly used in browser, node.js or other javascript runtimes.

Modules are available on npm, via bower or on github to download.

#### browser

```js
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import sprintf from 'i18next-sprintf-postprocessor';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(XHR)
  .use(Cache)
  .use(LanguageDetector)
  .use(sprintf)
  .init(options, callback);
```

__hint for jquery user:__ use additional [jquery-i18next](https://github.com/i18next/jquery-i18next)

#### nodejs

```js
var i18next = require('i18next'),
  FilesystemBackend = require('i18next-node-fs-backend'),
  sprintf = require('i18next-sprintf-postprocessor');

i18next
  .use(FilesystemBackend)
  .use(sprintf)
  .init(options, callback);
```

#### nodejs + express

```js
var express = require('express');
  i18next = require('i18next'),
  FilesystemBackend = require('i18next-node-fs-backend'),
  sprintf = require('i18next-sprintf-postprocessor'),
  i18nextMiddleware = require('i18next-express-middleware');

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(FilesystemBackend)
  .use(sprintf)
  .init(options, callback);

var app = express();

app.use(i18nextMiddleware.handle(i18next)); // expose req.t with fixed lng
app.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18next)); // serves missing key route for consumers (browser)
app.get('/locales/resources.json', i18nextMiddleware.getResourcesHandler(i18next)); // serves resources for consumers (browser)

app.listen(3000);
```

<a name="v1-11-x--v2-0-0-comp"></a>
### [Running v2.0.0 with compatibility flags](#v1-11-x--v2-0-0-comp)

Version 2.0.0 has a compatibility layer built in which allows to run it like v1.11.x. Keep in mind this layer will be removed in future version.

```js
import i18next from 'i18next';

i18next.init({
  compatibilityAPI: 'v1',
  compatibilityJSON: 'v1',
  // ...old options from v1
}, (err, t) => { /* resources are loaded */ });
```

option            | description
----------------- | -------------
compatibilityAPI  | Will convert init and t options and expose old API functions. Will be removed with future update.
compatibilityJSON | Will allow to use JSON files in v1 format. Using old interpolation prefix, suffix and no need for singular suffix [0] for singular in languages with more then just 1 plural form.

<a name="v1-11-x--v2-0-0-depr"></a>
### [Not supported any longer in v2.0.0!!!](#v1-11-x--v2-0-0-depr)

- __support for older browsers__:

  Beginning with v2 we target only modern browsers (Chrome, Firefox, ... and IE >= 10).

  For IE9 you will need to add a es5 shim, see [fiddle](https://jsfiddle.net/c7k51vcw/6/)

- __jquery__:

  use additional [jquery-i18next](https://github.com/i18next/jquery-i18next)

- __synchronous loading__:

  `i18next.init({ getAsync: false });`

  is not supported any longer - as not encouraged by browsers.

- __no conflict:__

  `i18n.noConflict();`

  was removed as i18next registers to window.i18next and no longer to window.i18n

- __indefinite article:__

  `i18n.t('myKey', { indefinite_article: true })`

  was removed - as the solution was too limited - reconsidering adding a better solution in a future v2 release
