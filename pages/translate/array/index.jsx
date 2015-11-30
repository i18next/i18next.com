import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 10,
        title: "Array"
      };
    }
  },

  render: function() {
    let options = {
      debug: true,
      lng: 'en',
      fallbackLng: 'en',
      joinArrays: '+',
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
      }
    };

    let samples = [
      {
        title: 'Join',
        run: [
          { fc: 't', args: ['arrayJoin'], comment: '(by option joinArray: "+")'}
        ]
      },
      {
        title: 'Access',
        run: [
          { fc: 't', args: ['arrayOfObjects.0.name'] }
        ]
      }
    ]

    const md = `
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="array"></a>
          <h2><a href='#array'>Arrays</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
