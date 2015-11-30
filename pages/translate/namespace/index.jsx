import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 2,
        title: "Namespaces"
      };
    }
  },

  render: function() {
    let options = {
      debug: true,
      lng: 'en',
      fallbackLng: 'en',
      ns: ['module1', 'module2', 'common'],
      defaultNS: 'module1', // accessing module1 needs no prefix for namespace
      fallbackNS: 'common', // or array of namespaces (optional)
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
      }
    };

    let samples = [
      {
        title: 'Basic',
        run: [
          { fc: 't', args: ['key1'] },
          { fc: 't', args: ['key2'], comment: '(not found without prefix)' },
          { fc: 't', args: ['module2:key2'], comment: '(found with prefix)' },
          { fc: 't', args: ['key3'], comment: '(fallback)' }
        ]
      },
      {
        title: 'Prefix',
        run: [
          { fc: 't', args: ['module1:key1'] },
          { fc: 't', args: ['module2:key2'] },
          { fc: 't', args: ['common:key3'] }
        ]
      },
      {
        title: 'Override options',
        run: [
          { fc: 't', args: ['key2', {ns: 'module2'}] },
          { fc: 't', args: ['key3', {ns: ['module2', 'common']}]},
          { fc: 't', args: ['common##key3', {nsSeparator: '##'}]}
        ]
      }
    ]

    const md = `
Use namespaces to separate translation resources into separated files/spaces.
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="namespaces"></a>
          <h2><a href='#namespaces'>Namespaces</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
