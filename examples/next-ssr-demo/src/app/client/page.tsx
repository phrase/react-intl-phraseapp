'use client'

import './App.css';
import { initializePhraseAppEditor } from 'react-intl-phraseapp';
import { IntlProvider } from 'react-intl';
import App from './App';
import { useEffect } from 'react';

export default function Page() {
  const config = {
    projectId: '00000000000000004158e0858d2fa45c',
    accountId: '0bed59e5',
    phraseEnabled: true,
    prefix: '[[__',
    suffix: '__]]'
  }

  const messages = {
    hero_title: "Enable the ICE by setting `phraseEnabled: true`!",
    advantages_text: "With the In-context Editor, clients are able to minimize errors by giving translators insight into the context of the translation and letting them edit the content right on the spot.",
    integrate_title: "Integrate the Phrase In-context Editor into your existing application",
    create_this_key: "This key doesn't exist yet, try creating it!",
    integrate_text: "We hope this example will help you integrate PhraseApp into your react app using react-intl",
    variable_text: "{variable} variable should show up when ICE is not enabled!"
  }

  useEffect(() =>{
    initializePhraseAppEditor(config);
  })
  
  return (
    <IntlProvider locale="en" messages={messages}>
      <App/>
    </IntlProvider>
  );
}
