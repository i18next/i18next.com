import React from 'react';
import DocumentTitle from 'react-document-title';
import Interactive from '../../_i18nextInteractive';
import Markdown from 'react-remarkable';

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 4,
        title: "Formatting"
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
      },
      interpolation: {
        format: function(value, format, lng) {
          if (format === 'uppercase') return value.toUpperCase();
          if (value instanceof Date) return value.toLocaleTimeString();
          return value;
        }
      }
    };

    let samples = [
      {
        title: 'Basic',
        run: [
          { fc: 't', args: ['key', {text: 'can you hear me'}]},
          { fc: 't', args: ['key2', {date: new Date()}]}
        ]
      }
    ]

    const md = `
You can add formatting using [moment.js](http://momentjs.com/) or [numeral.js](http://numeraljs.com/) with ease, eg:

    interpolation: {
      format: function(value, format, lng) {
        if(value instanceof Date) return moment(value).format(format);
        return value;
      }
    }

    // sample key:
    {
      "key": "The current date is {{date, MM/DD/YYYY}}"
    }

    i18next.t('key', { date: new Date() });
    // -> The current date is 07/13/2016

Keep the language on moment in sync with i18next by listening to the change language event:

    i18next.on('languageChanged', function(lng) {
      moment.locale(lng);
    });

The below sample is initalized with options:

    interpolation: {
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        if (value instanceof Date) return value.toLocaleTimeString();
        return value;
      }
    }

`

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <a name="formatting"></a>
          <h2><a href='#formatting'>Formatting</a></h2>
          <Markdown>
            {md}
          </Markdown>
          <Interactive options={options} samples={samples} />
        </div>
      </DocumentTitle>
    );
  }
});
