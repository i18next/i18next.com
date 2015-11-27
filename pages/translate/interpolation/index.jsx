import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 3,
        title: "Interpolation"
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
        title: 'Basic',
        run: [
          { fc: 't', args: ['key', {what: 'i18next', how: 'great'}]},
          { fc: 't', args: ['keyDeep', {author: { what: 'happy'}}]}
        ]
      },
      {
        title: 'Escaping',
        run: [
          { fc: 't', args: ['keyEscaped', { myVar: '<img />'}]},
          { fc: 't', args: ['keyUnescaped', { myVar: '<img />'}]},
          { fc: 't', args: ['keyEscaped', { myVar: '<img />', interpolation: {escape: false}}], comment: '(obviously danger now)'},
        ]
      },
      {
        title: 'Override Options',
        run: [
          { fc: 't', args: ['keyDifferent', {myVar: 'flexibility', interpolation: {prefix: '__', suffix: '__'}}] }
        ]
      }
    ]

    const md = `
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="interpolation"></a>
          <h2><a href='#interpolation'>Interpolation</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
