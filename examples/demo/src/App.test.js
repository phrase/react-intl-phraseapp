import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import { initializePhraseAppEditor } from 'react-intl-phraseapp';

var config = {
  projectId: '00000000000000004158e0858d2fa45c',
  accountId: '0bed59e5',
  phraseEnabled: true,
  prefix: '[[__',
  suffix: '__]]'
}

initializePhraseAppEditor(config);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <App />
    </IntlProvider>,
    div);
});
