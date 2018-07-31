let phraseAppEditor = false;

function sanitizeConfig(config: any) : any {
  config.prefix = config.prefix ? config.prefix : '{{__';
  config.suffix = config.suffix ? config.suffix : '__}}';

  return config;
}

export function initializePhraseAppEditor (config: any) {
  if (phraseAppEditor) return;
  
  phraseAppEditor = true;
  (<any>window).PHRASEAPP_ENABLED = config.phraseEnabled;  
  (<any>window).PHRASEAPP_CONFIG = sanitizeConfig(config);

  if (config.phraseEnabled) {
      const phraseapp = document.createElement('script');
      phraseapp.type = 'text/javascript';
      phraseapp.async = true;
      phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
      var s = document.getElementsByTagName('script')[0];
      if (s != undefined) {
        s.parentNode.insertBefore(phraseapp, s);
      } else {
        document.insertBefore(phraseapp, null);
      }
    }
}

export function isPhraseEnabled() : boolean {
  return (<any>window).PHRASEAPP_ENABLED
}

export function escapeId (id : string) : string {
  let config = (<any>window).PHRASEAPP_CONFIG;
  if (config.removePhrasePrefix) {
    return  config.prefix + id + config.suffix;
  } else {
    return  config.prefix + 'phrase_' + id + config.suffix;
  }
}