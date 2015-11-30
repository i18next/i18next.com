import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 6,
        title: "Context"
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
        title: 'Context',
        run: [
          { fc: 't', args: ['friend']},
          { fc: 't', args: ['friend', {context: 'male'}]},
          { fc: 't', args: ['friend', {context: 'female'}]}
        ]
      }
    ]

    const md = `
Contexts could be used to define different meanings or wordings. Like eg. for different genders.
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="context"></a>
          <h2><a href='#context'>Context</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
