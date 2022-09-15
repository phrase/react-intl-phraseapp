import * as React from 'react';
import { IntlShape, useIntl as ReactUseIntl } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';

export function useIntl(): IntlShape {
  if (isPhraseEnabled()) {
    const intl = ReactUseIntl();
    function wrappedFormatMessage(...args) {
      return escapeId(args[0]?.id || '');
    }
    return { ...intl, formatMessage: wrappedFormatMessage };
  } else {
    return ReactUseIntl();
  }
};
