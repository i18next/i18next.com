---
title: i18next ecosystem
order: 3
---



<a name="frameworks"></a>
### [framework support](#frameworks)

<div class="optionstable">

framework         | url     | description
----------------- | ------- | --------------------
react.js | [react-i18next](https://github.com/i18next/react-i18next) | Higher order component and append i18next to context.
angular.js | [ng-i18next](https://github.com/i18next/ng-i18next) | Angular1/2 provider, directive and filter
angular.js | [ng2-i18next](https://github.com/actimeo/ng2-i18next) | Angular2 service and directive
vue.js | [vue-i18next](https://github.com/rse/vue-i18next) | Vue plugin for integrating i18next
vue.js | [vue-i18next](https://github.com/panter/vue-i18next) | Vue plugin for integrating i18next
elm | [elm-i18next](https://github.com/ChristophP/elm-i18next) | Load and use JSON translations files at runtime
express.js | [nodejs express middleware](https://github.com/i18next/i18next-express-middleware) | Middleware to use i18next in express.js (nodejs).
koa.js | [koa-i18next](https://github.com/sunfuze/koa-i18next) | A middleware to use i18next in koajs.
koa.js | [koa-i18next-middleware](https://github.com/lxzxl/koa-i18next-middleware) | An i18next middleware for Koa framework. Use with koa-i18next-middleware
hapi.js | [hapi-i18next](https://github.com/kenkouot/hapi-i18next) | i18next integration for hapijs
jquery.js | [jquery plugin](https://github.com/i18next/jquery-i18next) | Plugin to use i18next on jquery selectors.
html5 | [loc-i18next](https://github.com/mthh/loc-i18next) | Plugin to use same API as jquery-i18next but with html5 selectors
aurelia.js | [aurelia-i18next](https://github.com/aurelia/i18n) | An Aurelia-Wrapper for the i18next library
meteor.js | [i18next-meteor](https://github.com/ckir/i18next-meteor) | i18next repackaged for Meteor
polymer | [i18next-element](https://github.com/Polymer/i18next-element) | Polymer friendly interface to i18next
ember.js | [ember-i18next](https://github.com/OCTRI/ember-i18next) | Integrates i18next into Ember CLI apps.
ember.js | [ember-cli-i18next](https://github.com/recipher/ember-cli-i18next) | Ember CLI addon to wrap i18next
knockout.js | [i18next-ko](https://github.com/leMaik/i18next-ko) | KnockoutJS bindings for i18next
phraser | [phaser-i18next](https://github.com/orange-games/phaser-i18next) | Phaser plugin for translations using i18next
metalsmith | [metalsmith-i18next](https://github.com/macprog-guy/metalsmith-i18next) | Metalsmith plugin for i18next to easily create multiple localised branches of your site.
django | [django-i18next](http://pythonhosted.org/django-i18next/) | Additions to Django’s i18n module.
php | [i18next-php](https://github.com/Acceptd/i18next-php) | PHP class for basic i18next functionality. [fork of](https://github.com/Mika-/i18next-php)
rails | [i18next-rails](https://github.com/roblander/i18next-rails) | An asset gem containing bundled i18next javascripts
rails | [rails-asset-localization](https://github.com/nicolai86/rails-asset-localization) | asset pipeline localization using i18next for rails 3.2 & 4
ios | [i18next-ios](https://github.com/i18next/i18next-ios) | i18next for iOS
android | [i18next-android](https://github.com/i18next/i18next-android) | i18next for android
webcomponent | [kwc-i18next](https://github.com/successk/kwc-i18next) | Web component interfacing i18next
marko.js | [marko-i18next](https://github.com/gunjam/marko-i18next) | Components to use i18next in Marko templates.
virtualdom | [i18nextify](https://github.com/i18next/i18nextify) | one liner script to enable i18next one any site



</div>


<a name="services"></a>
### [services](#services)

<div class="optionstable">

name              | description
----------------- | --------------------
[locize](http://locize.com) | localization as a service. Solves your localization process using i18next.

</div>


<a name="utils"></a>
### [utils](#utils)

<div class="optionstable">

util              | type       | description
----------------- | ---------- | --------------------
[i18next-gettext-converter](https://github.com/i18next/i18next-gettext-converter) | converter | Converts gettext .mo or .po to 18next json format and vice versa.
[csv2i18next](https://github.com/tmorozov/csv2i18next) | converter | Convert CSV files to JSON & YAML for i18next.js
[resx2i18next](https://github.com/rolandpd/resx2i18next) | converter |  Convert ResX-files to json ressouces compatible with i18next
[i18next-scanner](http://i18next.github.io/i18next-scanner/) | extractor | Scan your code, extract translation keys/values, and merge them into i18n resource files.
[i18next-parser](https://github.com/i18next/i18next-parser) | extractor | A simple command line and gulp plugin that lets you parse your code and extract the translations keys in it.
[i18nextResourceGenerator](https://github.com/DREEBIT/i18nextResourceGenerator) | extractor | Intellij IDEA Plugin for i18next resource generation
[aurelia-i18next-parser](https://github.com/gooy/aurelia-i18next-parser) | extractor | Extracts i18n keys and values from source files.
[grunt-i18next](https://github.com/i18next/grunt-i18next) | bundler | bundle language resource files for i18next
[i18next-po-loader](https://github.com/queicherius/i18next-po-loader) | bundler | Load gettext PO files as i18next format directly in webpack
[i18next-loader](https://github.com/kamilglod/i18next-loader) | bundler | webpack loader that can translate your code and generate bundle per each language
[webpack i18next-resource-store-loader](https://github.com/atroo/i18next-resource-store-loader) | bundler | This loader generates the resStore config needed for i18next to avoid loading language resources via extra HTTP requests. It generates this config given a directory.
[i18next-static-analysis)](https://github.com/Cellule/i18next-static-analysis) | util | analyse statically your code to find calls to i18next and validates them for all your supported languages
[i18next-json-sync](https://github.com/jwbay/i18next-json-sync) | util | Keep i18next JSON resource files in sync with source language file

</div>


<a name="plugins"></a>
### [plugins](#plugins)

<a name="backends"></a>
#### [backends](#backends)

<div class="optionstable">

backend           | description
----------------- | --------------------
[xhr backend](https://github.com/i18next/i18next-xhr-backend) | backend layer for i18next using browsers xhr
[fetch backend](https://github.com/perrin4869/i18next-fetch-backend) | backend layer for i18next using browsers fetch
[i18next.gettext](https://github.com/palamccc/i18next.gettext) | gettext backend of i18next
[nodejs filesystem](https://github.com/i18next/i18next-node-fs-backend) | node.js backend layer for i18next using fs module to load resources from filesystem
[nodejs filesystem (sync)](https://github.com/arve0/i18next-sync-fs-backend) | node.js backend layer for i18next using fs module to load resources synchronous from filesystem
[nodejs remote](https://github.com/i18next/i18next-node-remote-backend) | node.js backend layer for i18next using request module to load resources from another server
[nodejs mongodb](https://github.com/gian788/i18next-node-mongodb-backend) | i18next node.js backend layer for i18next using mongodb
[nodejs couchbase](https://github.com/kvaillant/i18next.couchbase) | i18next node.js backend layer for i18next using couchbase
[Zanata nodejs backend](https://bitbucket.org/tagoh/i18next-node-zanata-backend) | i18next node.js backend layer for [Zanata](http://zanata.org)
[i18next-firebase-backend)](https://github.com/inteligator/i18next-firebase-backend) | i18next Backend Using Firebase
[i18next-smart-bucket-backend](https://github.com/nekuz0r/i18next-smart-bucket-backend) | i18next backend for smart-bucket
[locize backend](https://github.com/locize/i18next-locize-backend) | backend layer for [locize.com - localization as a service](http://locize.com)
[locize nodejs backend](https://github.com/locize/i18next-node-locize-backend) | backend layer for [locize.com - localization as a service](http://locize.com)

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
[nodejs koa](https://github.com/lxzxl/koa-i18next-detector) | A i18next language detecting plugin for Koa framework.
[react native](https://github.com/DylanVann/i18next-react-native-language-detector) | language detector for React Native.
[electron](https://github.com/neruchev/i18next-electron-language-detector) | language detector for electron apps.

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
