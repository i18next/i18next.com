import React from 'react';
import DocumentTitle from 'react-document-title';
import Markdown from 'react-remarkable';
import isoLangs from './_isoLangs';
import PluralResolver from 'i18next/dist/commonjs/PluralResolver';
import LanguageUtils from 'i18next/dist/commonjs/LanguageUtils';


var pluralResolver = new PluralResolver(new LanguageUtils({ whitelist: false }));


function PluralItem(props) {
  var names = isoLangs[props.name];
  var fullName = names ? names.name : 'unknown';
  var nativeName = names ? names.nativeName: 'unknown';
  var version = props.version;

  return (
    <tr title={props.rule.plurals.toString()}>
      <td>{props.name}</td>
      <td>{fullName + ' (' + nativeName + ')'}</td>
      <td>
      {
        props.rule.numbers.length
      }
      </td>
      <td>
      {
        props.rule.numbers.length === 2 ? 'key, key_plural' : props.rule.numbers.reduce(function(red, n, i) {
          if (version === 'v3') {
            var res = red + 'key_' + i;
            if (i < props.rule.numbers.length - 1) res = res + ', ';
            return res;
          } else if (version === 'v2'){
            var res = red + 'key_' + props.rule.numbers[i];
            if (i < props.rule.numbers.length - 1) res = res + ', ';
            return res;
          } else {
            var res = red;
            var nr = props.rule.numbers[i];
            if (nr === 1) {
              res = res + 'key';
            } else {
              res = res + 'key_plural_' + props.rule.numbers[i];
            }
            if (i < props.rule.numbers.length - 1) res = res + ', ';
            return res;
          }
        }, '')
      }
      </td>
    </tr>
  );
}


module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 6,
        title: "Plural Suffixes"
      };
    }
  },

  componentWillMount: function() {
    this.pluralKeys = Object.keys(pluralResolver.rules).sort();
  },

  getInitialState: function() {
    return {
      version: 'v3'
    };
  },

  setV1: function() {
    this.setState({ version: 'v1' });
  },

  setV2: function() {
    this.setState({ version: 'v2' });
  },

  setV3: function() {
    this.setState({ version: 'v3' });
  },

  render: function() {
    var version = this.state.version;

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div className="optionstable">
          <h2><a href='#plurals'>Plural Suffixes</a></h2>
          <p>Hover a row to see the underlaying function.</p>
          <div style={{ textAlign: 'right', marginBottom: 20 }}>
            <a onClick={this.setV3} style={{ cursor: 'pointer', fontWeight: version === 'v3' ? 700 : 400 }}>show for v3.x.x</a>
            <a onClick={this.setV2} style={{ cursor: 'pointer', fontWeight: version === 'v2' ? 700 : 400, marginLeft: 40 }}>show for v2.x.x</a>
            <a onClick={this.setV1} style={{ cursor: 'pointer', fontWeight: version === 'v1' ? 700 : 400, marginLeft: 40 }}>show for v1.x.x</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>lng</th>
                <th>name</th>
                <th>pluralforms</th>
                <th>suffixes</th>
              </tr>
            </thead>
            <tbody>
            {
              this.pluralKeys.map(function(key, i) {
                return <PluralItem key={key} name={key} rule={pluralResolver.rules[key]} version={version} />
              })
            }
            </tbody>
          </table>
        </div>
      </DocumentTitle>
    );
  }
});
