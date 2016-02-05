import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 1,
        title: "Key Based Fallback"
      };
    }
  },

  render: function() {
    let options = {
      debug: true,
      lng: 'en',
      fallbackLng: false,
      keySeparator: false,
      nsSeparator: false,
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
      }
    };

    let samples = [
      {
        title: 'Fallback to key',
        run: [
          { fc: 't', args: ['No one says a key can not be the fallback.']},
          { fc: 't', args: ['While this is not found - fallback is provided from key.']}
        ]
      }
    ]

    const md = `
While i18next prefers providing keys as short hierarchical structure. There are i18n formats that prefer having keys as
the fallback (base language) for translations (eg. gettext).

i18next is flexible enough to be used this way, you should init i18next with:

    i18next.init({
      nsSeparator: false,
      keySeparator: false
    });

Further using [sprintf post processor](../../docs/ecosystem/#postprocessors) enables sprintf.
Transforming your files from *.mo*, *.po* to *.json* by using [i18next-gettext-converter](https://github.com/i18next/i18next-gettext-converter)
you could integrate i18next in your existing translation pipeline.
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="key-based-fallback"></a>
          <h2><a href='#key-based-fallback'>Key based fallback</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
