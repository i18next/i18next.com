---
title: "i18next: internationalization framework"
---

i18next is a very popular internationalization framework for browser or any other javascript environment (eg. node.js).

The current v2 release is a big milestone in keeping continuity for your translation projects by keeping a stable, modern API.

<div class="row">
<div class="col-md-6 col-xs-12">

i18next provides:

- Flexible connection to [backend](/docs/ecosystem/#backends) (loading translations via xhr, ...)
- Optional [caching](/docs/ecosystem/#caches), user [language detection](/docs/ecosystem/#languagedetector), ...
- Proper [pluralizations](/translate/pluralSimple/)
- Translation [context](/translate/context/)
- [Nesting](/translate/nesting/), [Variable replacement](/translate/interpolation/)
- Flexibility: prefer [keybased](/translate/) or [gettext](translate/keyBasedFallback/) style? No problem...
- Extensibility: eg. [sprintf](/docs/ecosystem/#postprocessors)
- Runs on modern browsers (Chrome, Firefox, ... and IE >= 10; IE9 with es5 shim)
- ...

</div>

<div class="col-md-6 col-xs-12">

For more information visit:

- [Getting started](/docs/)
- [Translation Functionality](/translate/)
- [API](/docs/api/)
- [Migration Guide from v1.11.x](/docs/migration/)
- [Old v1.11.x Documentation](http://i18next.github.io/i18next/)

</div>
</div>

Our focus is providing the core for building a booming ecosystem. Independent of the building blocks you choose, be it react, angular or even good old jquery - proper translation capabilities are just [one step away](/docs/ecosystem/#frameworks).


### download

Source can be loaded via [npm](https://www.npmjs.com/package/i18next), bower or [downloaded](https://github.com/i18next/i18next/blob/master/i18next.min.js) from this repo.


```bash
# npm
$ npm install i18next

# bower
$ bower install i18next
```

### Projects / Companys using i18next

<a href="https://enketo.org" class="projectlink" target="_blank"><img src="/img/projects/enketo.png" /></a>
<a href="http://www.viima.com" class="projectlink" target="_blank"><img src="/img/projects/viima-logo-vector.svg" style="height: 50px;top: -7px;margin-left:25px;position: relative;" /></a>
<a href="http://www.hubii.com" class="projectlink" target="_blank"><img src="/img/projects/Hubii_Logo_Horizontal_M.png" style="height: 50px;width:auto;margin-top: 1px;margin-left:25px;position: relative;" /></a>

Want to see your project or company here: Add it [here](https://github.com/i18next/i18next.com/blob/master/pages/index.md) and send a pull request.
