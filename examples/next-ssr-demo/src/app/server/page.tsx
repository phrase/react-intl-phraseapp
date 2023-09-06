'server-only'

import './App.css';
import App from './App';
import Script from 'next/script';
import { createPhraseScript } from 'react-intl-phraseapp/functions';

export default async function Page() {
  // Adjust your Project and Account ids
  // Basically you can use ICE with anything as long as you can manage to convert your translation library's key output to [[__phrase_some.key.id__]]
  // This format will allow ICE to catch the keys and should then be able to process them
  const config = {
    projectId: '00000000000000004158e0858d2fa45c',
    accountId: '0bed59e5',

  }

  return (
    <div>
      <App/>
      <Script id="phrase-script" dangerouslySetInnerHTML={{__html: createPhraseScript(config)}} />
    </div>
  );
}
