import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 0,
        title: "Basics"
      };
    }
  },

  render: function() {
    let options = {
      debug: true,
      lng: 'de-DE',
      fallbackLng: 'en',
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
      }
    };

    let samples = [
      {
        title: 'Basic translation',
        run: [
          { fc: 't', args: ['key1'] },
          { fc: 't', args: ['key2'] },
          { fc: 't', args: ['key3'] },
          { fc: 't', args: ['key4'], comment: '(fallback to show key)' }
        ]
      },
      {
        title: 'Multiple keys',
        run: [
          { fc: 't', args: [['key4', 'key3']], comment: '(returns first found)' }
        ]
      },
      {
        title: 'Deeper keys',
        run: [
          { fc: 't', args: ['key.with.sub'] }
        ]
      },
      {
        title: 'Override options',
        run: [
          { fc: 't', args: ['key1', {lng: 'en'}] },
          { fc: 't', args: ['key1', {lngs: ['de', 'en']}] },
          { fc: 't', args: ['key#with#sub', {keySeparator: '#'}] },
          { fc: 't', args: ['notExisting', {defaultValue: 'fallback from defaultValue'}] }
        ]
      }
    ]

    const md = `
The lookup order for keys is always:

1) \`en-US\` language + country
2) \`en\` language only
3) \`fallback\` thats defined in options.fallbackLng (string or array of fallback language)
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="resolve"></a>
          <h2><a href='#resolve'>Resolve resources</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
