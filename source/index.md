---
title: i18next.com

<!-- language_tabs:
  - shell
  - ruby
  - python -->

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>
  - <button>click me</button>

includes:
  - init

search: true
---

# Introduction

```html
<body>
  <ul class="nav">
    <li><a href="#" data-i18n="nav.home"></a></li>
    <li><a href="#" data-i18n="nav.page1"></a></li>
    <li><a href="#" data-i18n="nav.page2"></a></li>
  </ul>
  <script>
    // init will detect language and load translations from server
    i18n.init(function(t) {
      // translate selector .nav
      $(".nav").i18n();

      // programatical access
      var appName = t("app.name");
    });
  </script>
</body>
```

i18next is a full-featured i18n javascript library for translating your webapplication (runs in browser, under node.js, rhino and other javascript runtimes).

- support for variables
- support for nesting
- support for context
- support for multiple plural forms
- gettext support
- sprintf supported
- detect language
- graceful translation lookup
- jquery function
- get string or object tree
- get resourcefiles from server
- resource caching in browser
- post missing resources to server
- highly configurable
- custom post processing
- translation ui

## Installation

### Download

<button>click me</button>

### CDN

//cdn.jsdelivr.net/i18next/1.7.7/i18next.min.js

### NPM

`npm install i18next-client`


