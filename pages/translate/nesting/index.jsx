import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 4,
        title: "Nesting"
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
        title: 'Nesting',
        run: [
          { fc: 't', args: ['nesting1'] }
        ]
      },
      {
        title: 'With plural and options',
        run: [
          { fc: 't', args: ['girlsAndBoys', {count: 2, girls: 3}] }
        ]
      }
    ]

    const md = `
Nesting can be useful to reuse existing resources - eg. to build up a glossary of terms.
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="nesting"></a>
          <h2><a href='#nesting'>Nesting</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
