---
title: i18next ecosystem
order: 3
---



<a name="frameworks"></a>
### [framework support](#frameworks)

<div class="optionstable">

framework         | description
----------------- | --------------------
[react-i18next](https://github.com/i18next/react-i18next) | Higher order component and append i18next to context.
[ng-i18next](https://github.com/i18next/ng-i18next) | AngularJS provider, directive and filter
[nodejs express middleware](https://github.com/i18next/i18next-express-middleware) | Middleware to use i18next in express.js (nodejs).
[jquery plugin](https://github.com/i18next/jquery-i18next) | Plugin to use i18next on jquery selectors.
[aurelia-i18next](https://github.com/zewa666/aurelia-i18next) | An Aurelia-Wrapper for the i18next library
[i18next-meteor](https://github.com/ckir/i18next-meteor) | i18next repackaged for Meteor
[i18next-element](https://github.com/Polymer/i18next-element) | Polymer friendly interface to i18next
[ember-cli-i18next](https://github.com/recipher/ember-cli-i18next) | Ember CLI addon to wrap i18next
[i18next-ko](https://github.com/leMaik/i18next-ko) | KnockoutJS bindings for i18next
[django-i18next](http://pythonhosted.org/django-i18next/) | Additions to Django’s i18n module.
[i18next-ios](https://github.com/i18next/i18next-ios) | i18next for iOS
[i18next-android](https://github.com/i18next/i18next-android) | i18next for android



</div>


<a name="utils"></a>
### [utils](#utils)

<div class="optionstable">

util              | description
----------------- | --------------------
[i18next-gettext-converter](https://github.com/i18next/i18next-gettext-converter) | Converts gettext .mo or .po to 18next json format and vice versa.
[i18next-scanner](http://i18next.github.io/i18next-scanner/) | Scan your code, extract translation keys/values, and merge them into i18n resource files.
[i18next-parser](https://github.com/i18next/i18next-parser) | A simple command line and gulp plugin that lets you parse your code and extract the translations keys in it.
[grunt-i18next](https://github.com/i18next/grunt-i18next) | bundle language resource files for i18next
[webpack i18next-resource-store-loader](https://github.com/atroo/i18next-resource-store-loader) | This loader generates the resStore config needed for i18next to avoid loading language resources via extra HTTP requests. It generates this config given a directory.

</div>

<a name="plugins"></a>
### [plugins](#plugins)

<a name="backends"></a>
#### [backends](#backends)

<div class="optionstable">

backend           | description
----------------- | --------------------
[xhr backend](https://github.com/i18next/i18next-xhr-backend) | backend layer for i18next using browsers xhr
[nodejs filesystem](https://github.com/i18next/i18next-node-fs-backend) | node.js backend layer for i18next using fs module to load resources from filesystem
[nodejs filesystem (sync)](https://github.com/arve0/i18next-sync-fs-backend) | node.js backend layer for i18next using fs module to load resources synchronous from filesystem
[nodejs remote](https://github.com/i18next/i18next-node-remote-backend) | node.js backend layer for i18next using request module to load resources from another server
[nodejs mongodb](https://github.com/gian788/i18next-node-mongodb-backend) | i18next node.js backend layer for i18next using mongodb
[nodejs couchbase](https://github.com/kvaillant/i18next.couchbase) | i18next node.js backend layer for i18next using couchbase

</div>



<a name="caches"></a>
#### [caches](#caches)

<div class="optionstable">

cache             | description
----------------- | --------------------
[localStorage cache](https://github.com/i18next/i18next-localStorage-cache) | caching layer for i18next using browsers localStorage

</div>




<a name="languagedetector"></a>
#### [language detector](#languagedetector)

<div class="optionstable">

language detector | description
----------------- | --------------------
[browser](https://github.com/i18next/i18next-browser-languageDetector) | language detector used in browser environment for i18next
[nodejs express](https://github.com/i18next/i18next-express-middleware) | language detector for express.js (nodejs).

</div>




<a name="postprocessors"></a>
### [post processors](#postprocessors)

<div class="optionstable">

post processor    | description
----------------- | --------------------
[sprintf post processor](https://github.com/i18next/i18next-sprintf-postProcessor) | sprintf post processor for i18next.
[interval plurals](https://github.com/i18next/i18next-intervalPlural-postProcessor) | interval based plurals like. "One Item", "A few items", "A lot of items"

</div>


<a name="loggers"></a>
### [loggers](#loggers)

right now there is only the integrated console logger available.


<a name="add-your-own"></a>
### [add your own module](#add-your-own)

Feel free to submit your own module by adding your module [here](https://github.com/i18next/i18next.com/blob/master/pages/docs/ecosystem/index.md) and creating a pull request.
