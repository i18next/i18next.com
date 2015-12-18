import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 8,
        title: "Return Objects"
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
          { fc: 't', args: ['tree', {returnObjects: true}]}
        ]
      }
    ]

    const md = `
By default we only return values not complete objects.
This behaviour could be overriden in init options or translation options.
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="objects"></a>
          <h2><a href='#objects'>Return Objects</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
