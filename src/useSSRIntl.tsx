import { createIntl, createIntlCache } from '@formatjs/intl';
import { escapeId, isPhraseEnabled } from './functions';

export async function useSSRIntl({locale, messages}) {
  const cache = createIntlCache();
  const intl = createIntl({locale, messages}, cache)

  if (isPhraseEnabled()) {
    function wrappedFormatMessage(...args) {
      return escapeId(args[0]?.id || '');
    }
    return { ...intl, formatMessage: wrappedFormatMessage };
  } else {
    return intl;
  }
};
