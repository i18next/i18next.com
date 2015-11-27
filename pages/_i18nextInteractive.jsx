import React from 'react';
import i18next from 'i18next/lib';
import Backend from 'i18next-xhr-backend/lib';
import Highlight from 'react-highlight';
import cloneDeep from 'lodash/lang/cloneDeep';
import values from 'lodash/object/values';

import Typography from 'typography';
var typography = new Typography();
var rhythm = typography.rhythm;

function jsonToJSText(str) {
  return str
    .replace(/"([^"]+(?=":))"/g, '$1') // remove " from "lng":
    .replace(/:/g, ': ') // adds whitespace after :
    .replace(/"/g, '\''); // replaces " with '
}

export default React.createClass({
  getInitialState() {
    return {
      ready: false,
      log: []
    }
  },

  componentWillMount() {
    var self = this;

    this.setState({
      origOptions: cloneDeep(this.props.options)
    })

    const stateLogger = {
      type: 'logger',

      log(args) {
        this._output('log', args);
      },

      warn(args) {
        this._output('warn', args);
      },

      error(args) {
        this._output('error', args);
      },

      _output(type, args) {
        self.setState({
          log: [args].concat(self.state.log)
        });
        if (console && console[type]) console[type].apply(console, Array.prototype.slice.call(args));
      }
    };

    let instance = i18next.createInstance();

    let ready = (err, t) => {
      this.setState({
        ready: true,
        samples: this.runSamples()
      });
    }

    if (this.props.options.backend) {
      instance
        .use(Backend)
        .use(stateLogger)
        .init(this.props.options, ready);
    } else {
      instance
        .use(stateLogger)
        .init(this.props.options, ready);
    }

    instance.on('loaded', (loaded) => {
      this.setState({
        loaded: true,
        resources: instance.services.resourceStore.toJSON()
      });
    });


    this.i18next = instance;
  },

  runSamples() {
    let samples = cloneDeep(this.props.samples);
    samples.map((sample) => {
      sample.run.map((item) => {
        item.res = this.i18next[item.fc].apply(this.i18next, item.args);
      })
    });
    return samples;
  },

  render() {
    return (
      <div>

        <div>

          <h4>{this.props.options.backend ? 'loaded resources' : 'passed in resources' }</h4>
          <div style={{maxHeight: 250, overflowY: 'auto'}}>
            <Highlight className='json'>
              {JSON.stringify(this.state.resources, null, 2)}
            </Highlight>
          </div>

        </div>

        <hr />

        <div>

          <h4>Samples</h4>

          {
            this.state.samples &&
            this.state.samples.map((sample) => {
              return (
                <Highlight className='js'>
                  {
                    sample.run &&
                    sample.run.map((item) => {
                      let lines = [];

                      let parsedArgs = item.args.map((arg) => { return jsonToJSText(JSON.stringify(arg)); });

                      if (item.fc === 't') {
                        let txt = `i18next.${item.fc}(${parsedArgs.join(', ')}); // output: '${item.res}'`;
                        txt += item.comment ? ` ${item.comment}\n` : '\n';
                        lines.push(txt);
                      }
                      return lines.join('\n');
                    })
                  }
                </Highlight>
              )
            })
          }

        </div>

        <hr />

        <div
          style={{
            overflowY: 'auto',
            maxHeight: 400
          }}
        >
          <div
            style={{
              overflowY: 'auto',
              paddingRight: `calc(${rhythm(1/2)} - 1px)`,
              position: 'absolute',
              width: `calc(${rhythm(16)} - 1px)`,
              borderRight: '1px solid lightgrey'
            }}
          >
            <h6>Init options</h6>
            <div className='code-10'>
              <Highlight className='json'>
                {JSON.stringify(this.state.origOptions, null, 2)}
              </Highlight>
            </div>
          </div>
          <div
            style={{
              padding: `0 ${rhythm(1)}`,
              paddingLeft: `calc(${rhythm(16)} + ${rhythm(1)})`
            }}
          >
            <h6>Console</h6>
            {
              this.state.log.map((item) => {
                if (item.length === 1) return <div style={{fontSize: 12, marginBottom: 20}}><span>{item[0]}</span></div>;
                if (item.length === 2) return (
                  <div style={{fontSize: 12, marginBottom: 20}}>
                    <span>{item[0]}</span>
                    <div className='code-10' style={{fontSize: 8, padding: 2, maxHeight: 100, overflowY: 'auto'}}>
                      <Highlight className='json'>
                        {JSON.stringify(item[1], null, 2)}
                      </Highlight>
                    </div>
                  </div>
                );
                if (item.length > 2) return (
                  <div style={{fontSize: 12, marginBottom: 20}}>
                    <span>{item[0]}</span>
                    <div className='code-10' style={{fontSize: 8, padding: 2, maxHeight: 100, overflowY: 'auto'}}>
                      <Highlight className='json'>
                        {JSON.stringify(values(item).slice(1).join(', '), null, 2)}
                      </Highlight>
                    </div>
                  </div>
                );
                return null;
              })
            }
          </div>
        </div>

      </div>
    );
  },
});
