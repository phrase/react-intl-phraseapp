import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IntlProvider} from 'react-intl';
import './index.css';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'

var config = {
  projectId: '00000000000000004158e0858d2fa45c',
  accountId: '0bed59e5',
  phraseEnabled: true,
  prefix: '[[__',
  suffix: '__]]'
}

initializePhraseAppEditor(config);

const messages = {
  'welcome.headline': 'This headline is visible when "phraseEnabled" config option is set to false'
};


ReactDOM.render(
  <IntlProvider locale="en" messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
