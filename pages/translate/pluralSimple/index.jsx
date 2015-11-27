import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 4,
        title: "Singular/Plural"
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
        title: 'Simple plurals',
        run: [
          { fc: 't', args: ['key', {count: 0}]},
          { fc: 't', args: ['key', {count: 1}]},
          { fc: 't', args: ['key', {count: 5}]},
          { fc: 't', args: ['key', {count: 100}]},
          { fc: 't', args: ['keyWithCount', {count: 0}]},
          { fc: 't', args: ['keyWithCount', {count: 1}]},
          { fc: 't', args: ['keyWithCount', {count: 5}]},
          { fc: 't', args: ['keyWithCount', {count: 100}]}
        ]
      }
    ]

    const md = `
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="pluralSimple"></a>
          <h2><a href='#pluralSimple'>Singular/Plural</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
