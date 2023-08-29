import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'
import { IntlProvider } from 'react-intl';

var config = {
  projectId: '00000000000000004158e0858d2fa45c',
  accountId: '0bed59e5',
  phraseEnabled: true,
  prefix: '[[__',
  suffix: '__]]'
}

initializePhraseAppEditor(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale="en" messages={{}}>
    <App/>
  </IntlProvider>
);
