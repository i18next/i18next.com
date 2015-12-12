---
title: "i18next: internationalization framework"
---

i18next is a very popular internationalization framework for browser or any other javascript environment (eg. node.js).

The current v2 release is a big milestone in keeping continuity for your translation projects by keeping a stable, modern API started in 2011.

i18next provides:

- Flexible connection to [backend](/docs/ecosystem/#backends) (loading translations via xhr, ...)
- Optional [caching](/docs/ecosystem/#caches), user [language detection](/docs/ecosystem/#languagedetector), ...
- Proper [pluralizations](/translate/pluralSimple/)
- Translation [context](/translate/context/)
- [Nesting](/translate/nesting/), [Variable replacement](/translate/interpolation/)
- Flexibility: prefer [keybased](/translate/) or [gettext](translate/keyBasedFallback/) style? No problem...
- Extensibility: eg. [sprintf](/docs/ecosystem/#postprocessors)
- ...


For more information visit the website:

- [Getting started](/docs/)
- [Translation Functionality](/translate/)
- [API](/docs/api/)
- [Migration Guide from v1.11.x](/docs/migration/)



Our focus is providing the core to building a booming ecosystem. Independent of the building blocks you choose, be it react, angular or even good old jquery proper translation capabilities are just [one step away](/docs/ecosystem/#frameworks).


## download

Source can be loaded via [npm](https://www.npmjs.com/package/i18next), bower or [downloaded](https://github.com/i18next/i18next/blob/master/i18next.min.js) from this repo.


```bash
# npm
$ npm install i18next@beta

# bower
$ bower install i18next/i18next#2.0.0
```
