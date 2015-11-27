---
title: Namespaces
order: 1
---

<a name="namespaces"></a>
## [Multiple namespaces](#namespaces)

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
    lng: 'en',
    fallbackLng: 'en',
    ns: ['module1', 'module2', 'common'],
    defaultNS: 'module1', // accessing module1 needs no prefix for namespace
    fallbackNS: 'common' // or array of namespaces (optional)
  }, (err, t) {
    // i18next-xhr-backend will try to load:
    //
    // en.module1 '/locales/en/module1.json'
    // {
    //   "key1": "some value in module 1"
    // }
    //
    // en.module2 '/locales/en/module2.json'
    // {
    //   "key2": "some value in module 2"
    // }
    //
    // en.common '/locales/en/common.json'
    // {
    //   "key3": "some value in common"
    // }


    i18next.t('key1'); // returns 'some value in module 1' as en.module1.key1 exists
    i18next.t('key2'); // returns 'key2' as en.module1.key2 nor en.common.key2 do exists
    i18next.t('key3'); // returns 'some value in common' as en.common.key3 exists

    // namespace prefix
    i18next.t('module2:key2') // returns 'some value in module 2' as en.module2.key2 exists

    // namespace in options (string or array of namespaces)
    i18next.t('key2', {ns: 'module2'}) // returns 'some value in module 2' as en.module2.key2 exists
  });
```
