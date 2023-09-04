'server-only'

import './App.css';
import App from './App';

export default async function Page() {
  // Adjust your Project and Account ids
  // This is a custom snippet to use the ICE
  // Basically you can use ICE with anything as long as you can manage to convert your translation library's key output to {{__phrase_some.key.id__}}
  // This format will allow ICE to catch the keys and should then be able to process them
  function createPhraseScript() {
    const config = JSON.stringify({
      projectId: '00000000000000004158e0858d2fa45c',
      accountId: '0bed59e5',
      datacenter: 'eu',
      phraseEnabled: true,
      prefix: '{{__',
      suffix: '__}}'
    }) + ";";

    return {__html: "window.PHRASEAPP_CONFIG = " + config + "function init() {const phraseapp = document.createElement('script');phraseapp.type = 'module';phraseapp.async = true;phraseapp.src = 'https://d2bgdldl6xit7z.cloudfront.net/latest/ice/index.js';let s = document.getElementsByTagName('script')[0]; s?.parentNode?.insertBefore(phraseapp, s);};init();"}
  }

  return (
    <div>
      <App/>
      <script defer dangerouslySetInnerHTML={createPhraseScript()}/>
    </div>
  );
}
