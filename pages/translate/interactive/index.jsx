import React from 'react';
import DocumentTitle from 'react-document-title';

import Interactive from '../../_i18nextInteractive';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 4,
        title: "Some React Code"
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
        run: [
          { fc: 't', args: ['key1'] },
          { fc: 't', args: ['key2'] },
          { fc: 't', args: ['key3'] },
          { fc: 't', args: ['key4'], comment: '(fallback to show key)' },
          { fc: 't', args: ['key1', {lng: 'en'}] },
          { fc: 't', args: ['key1', {lngs: ['de', 'en']}] }
        ]
      }
    ]

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div style={{ height: 500 }} >
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
