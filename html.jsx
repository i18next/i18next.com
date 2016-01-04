import React from 'react';
import DocumentTitle from 'react-document-title';

import typography from './utils/typography';
const { TypographyStyle } = typography;

module.exports = React.createClass({
  defaultProps: {
    body: ''
  },

  render: function() {
    var title, urlPrefix;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }
    if ((typeof __GH_PAGES__ !== 'undefined' && __GH_PAGES__ !== null) && __GH_PAGES__) {
      urlPrefix = this.props.config.ghPagesURLPrefix;
    } else {
      urlPrefix = '';
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
          <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{title}</title>
          <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png'/>
          <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png'/>
          <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png'/>
          <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png'/>
          <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png'/>
          <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png'/>
          <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png'/>
          <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png'/>
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png'/>
          <link rel='icon' type='image/png' sizes='192x192'  href='/android-icon-192x192.png'/>
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png'/>
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
          <link rel='manifest' href='/manifest.json'/>
          <meta name='msapplication-TileColor' content='#ffffff'/>
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png'/>
          <meta name='theme-color' content='#ffffff'/>
          <TypographyStyle/>
          {/*<style dangerouslySetInnerHTML={{__html:
            `
              a {
                color: #884499;
              }
              pre {
                background: whitesmoke;
                padding: 1.5rem;
              }
              .demo1-ball {
                border-radius: 99px;
                background-color: white;
                width: 50px;
                height: 50px;
                border: 3px solid white;
                position: absolute;
                background-size: 50px;
              }
              .ball-0 {
                background-image: url(${urlPrefix}/docs/some-react-code/0.jpg);
              }
              .ball-1 {
                background-image: url(${urlPrefix}/docs/some-react-code/1.jpg);
              }
              .ball-2 {
                background-image: url(${urlPrefix}/docs/some-react-code/2.jpg);
              }
              .ball-3 {
                background-image: url(${urlPrefix}/docs/some-react-code/3.jpg);
              }
              .ball-4 {
                background-image: url(${urlPrefix}/docs/some-react-code/4.jpg);
              }
              .ball-5 {
                background-image: url(${urlPrefix}/docs/some-react-code/5.jpg);
              }
            `
          }} />*/}
        </head>
        <body className='landing-page'>
          <div id='react-mount' dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src={`${urlPrefix}/bundle.js`}/>
        </body>
      </html>
    );
  }
});
