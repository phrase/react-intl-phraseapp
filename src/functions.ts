let phraseAppEditor = false;

function sanitizeConfig(config: any) : any {
  config.prefix = config.prefix ? config.prefix : '{{__';
  config.suffix = config.suffix ? config.suffix : '__}}';

  return config;
}

type Config = {
  accountId: string;
  projectId: string;
  datacenter: 'eu' | 'us';
  phraseEnabled: boolean;
  prefix: string;
  suffix: string;
}

export function createPhraseScript(userConfig: Partial<Config>) {
  const defaultConfig = {
    projectId: undefined,
    accountId: undefined,
    datacenter: 'eu',
    phraseEnabled: true,
    prefix: '[[__',
    suffix: '__]]'
  }
  const config = {...defaultConfig, ...userConfig}
  globalThis.PHRASEAPP_ENABLED = config.phraseEnabled
  globalThis.PHRASEAPP_CONFIG = config
  return "window.PHRASEAPP_CONFIG = " + JSON.stringify(config) + ";" + "function init() {const phraseapp = document.createElement('script');phraseapp.type = 'module';phraseapp.async = true;phraseapp.src = 'https://d2bgdldl6xit7z.cloudfront.net/latest/ice/index.js';let s = document.getElementsByTagName('script')[0]; s?.parentNode?.insertBefore(phraseapp, s);};init();"
}

export function initializePhraseAppEditor (config: any) {
  if (phraseAppEditor && !config.forceInitialize) return;
  
  phraseAppEditor = true;
  globalThis.PHRASEAPP_ENABLED = config.phraseEnabled
  globalThis.PHRASEAPP_CONFIG = sanitizeConfig(config);

  if (config.phraseEnabled) {
      const phraseapp = document.createElement('script');
      if (config.useOldICE) {
        phraseapp.type = 'text/javascript';
        phraseapp.src = ['https://', 'app.phrase.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
      } else {
        phraseapp.type = 'module';
        phraseapp.src = 'https://d2bgdldl6xit7z.cloudfront.net/latest/ice/index.js'
      }

      phraseapp.async = true;
      var s = document.getElementsByTagName('script')[0];
      if (s !== undefined) {
        s.parentNode.insertBefore(phraseapp, s);
      } else {
        document.body.appendChild(phraseapp);
      }
    }
}

export function isPhraseEnabled() : boolean {
  return globalThis.PHRASEAPP_ENABLED
}

export function escapeId (id : string | number) : string {
  let config = globalThis.PHRASEAPP_CONFIG;
  return  config.prefix + 'phrase_' + id + config.suffix;
}
