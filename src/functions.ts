let phraseAppEditor = false;

function sanitizeConfig(config: any) : any {
  config.prefix = config.prefix ? config.prefix : '{{__';
  config.suffix = config.suffix ? config.suffix : '__}}';

  return config;
}

export function initializePhraseAppEditor (config: any) {
  if (phraseAppEditor && !config.forceInitialize) return;
  
  phraseAppEditor = true;
  (<any>window).PHRASEAPP_ENABLED = config.phraseEnabled;  
  (<any>window).PHRASEAPP_CONFIG = sanitizeConfig(config);

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
  return (<any>window).PHRASEAPP_ENABLED
}

export function escapeId (id : string | number) : string {
  let config = (<any>window).PHRASEAPP_CONFIG;
  return  config.prefix + 'phrase_' + id + config.suffix;
}
