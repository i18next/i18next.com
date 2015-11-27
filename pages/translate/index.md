---
title: Basics
order: 0
---

<a name="resolve"></a>
## [Resolving a key](#resolve)

The lookup order for keys is always:

1) `en-US` language + country
2) `en` language only
3) `fallback` thats defined in options.fallbackLng (string or array of fallback language)

```js
import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';

i18next
  .use(Backend)
  .init({
    lng: 'de-DE',
    fallbackLng: 'en'
  }, (err, t) {
    // i18next-xhr-backend will try to load:
    //
    // de-DE resource '/locales/de-DE/translation.json'
    // {
    //   "key1": "value of key 1 in de-DE"
    // }
    //
    // de resource '/locales/de/translation.json'
    // {
    //   "key1": "value of key 1 in de",
    //   "key2": "value of key 2 in de"
    // }
    //
    // en fallback '/locales/en/translation.json'
    // {
    //   "key1": "value of key 1 in en",
    //   "key2": "value of key 2 in en",
    //   "key3": "value of key 3 in en"
    // }

    i18next.t('key1'); // returns 'value of key 1 in de-DE' as found in de-DE
    i18next.t('key2'); // returns 'value of key 2 in de' as only found in de
    i18next.t('key3'); // returns 'value of key 3 in en' as only found in fallback en

    // not found keys
    i18next.t('key4'); // returns 'key4' as not existing

    // override lng in options
    i18next.t('key1', {lng: 'en'}); // returns 'value of key 1 in en' as found in en
    i18next.t('key1', {lngs: ['de', 'en']}); // returns 'value of key 1 in de' as found in de
  });
```
