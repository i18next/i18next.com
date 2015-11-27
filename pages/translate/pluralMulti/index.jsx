import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 5,
        title: "Plural Multiple Forms"
      };
    }
  },

  render: function() {
    let options = {
      debug: true,
      lng: 'ar',
      fallbackLng: 'ar',
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json'
      }
    };

    let samples = [
      {
        title: 'Multiple plural forms',
        run: [
          { fc: 't', args: ['key', {count: 0}]},
          { fc: 't', args: ['key', {count: 1}]},
          { fc: 't', args: ['key', {count: 2}]},
          { fc: 't', args: ['key', {count: 3}]},
          { fc: 't', args: ['key', {count: 4}]},
          { fc: 't', args: ['key', {count: 5}]},
          { fc: 't', args: ['key', {count: 11}]},
          { fc: 't', args: ['key', {count: 99}]},
          { fc: 't', args: ['key', {count: 100}]}
        ]
      }
    ]

    const md = `
For languages with more then just singular and plural can be defined like used in gettext based translations
by appending the number of plural form:

Numbers can be looked up [here](https://github.com/i18next/i18next/blob/master/src/PluralResolver.js).
`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="pluralMulti"></a>
          <h2><a href='#pluralMulti'>Multiple plural forms</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
