---
title: Getting started
order: 0
---


## Getting started

i18next is exported in UMD format and can be loaded via commonjs, requirejs (AMD) or will be added to global scope `window.i18next`.

Source can be loaded via [npm](https://www.npmjs.com/package/i18next), bower or [downloaded](https://github.com/i18next/i18next/blob/2.0.0/i18next.min.js) from this repo.


```bash
# npm
$ npm install i18next@beta

# bower
$ bower install i18next/i18next#2.0.0
```

```js
import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  const hw = i18next.t('key'); // hw = 'hello world'
});
```



## Adding plugins

i18next comes with a lot of modules to enhance the features avaiable. There are modules to:

- load resources, eg. via xhr or from filesystem (node.js)
- cache resources on client, eg. localStorage
- detect user language by querystring, navigator, cookie, ...
- post processors to further manipulate values, eg. to add sprintf support

[Available plugins](ecosystem/#plugins)

```js
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';
import sprintf from 'i18next-sprintf-postprocessor';

i18next
  .use(XHR) // or any other backend implementation
  .use(Cache) // or any other cache implementation
  .use(LanguageDetector) // or any other implementation
  .use(sprintf) // or any other post processor
  .init(options);
```
