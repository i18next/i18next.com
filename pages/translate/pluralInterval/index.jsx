import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';
import PluralInterval from 'i18next-intervalplural-postprocessor/lib';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 6,
        title: "Interval Plural"
      };
    }
  },

  render: function() {
    let options = {
      debug: true,
      lng: 'en',
      fallbackLng: 'en',
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
      }
    };

    let samples = [
      {
        title: 'Interval plurals',
        run: [
          { fc: 't', args: ['key1_interval', { postProcess: 'interval', count: 1 }]},
          { fc: 't', args: ['key1_interval', { postProcess: 'interval', count: 4 }]},
          { fc: 't', args: ['key1_interval', { postProcess: 'interval', count: 100 }]}
        ]
      },
      {
        title: 'Interval plurals - seamless fallbacks to standard plural',
        run: [
          { fc: 't', args: ['key2_interval', { postProcess: 'interval', count: 1 }]},
          { fc: 't', args: ['key2_interval', { postProcess: 'interval', count: 4 }]},
          { fc: 't', args: ['key2_interval', { postProcess: 'interval', count: 100 }]}
        ]
      }
    ]

    const md = `
To support interval plurals you will need to add the [i18next-intervalplural-postprocessor](https://github.com/i18next/i18next-intervalplural-postprocessor).

Checkout the [readme](https://github.com/i18next/i18next-intervalplural-postprocessor) for details.
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="pluralInterval"></a>
          <h2><a href='#pluralInterval'>Interval Plural</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive use={[PluralInterval]} options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
