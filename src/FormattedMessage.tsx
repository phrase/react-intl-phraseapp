import * as React from 'react';
import { FormattedMessage as IntlFormattedMessage } from 'react-intl';
import { Props } from 'react-intl/lib/src/components/message';
import { escapeId, isPhraseEnabled } from './functions';

export const FormattedMessage: React.FC<Props> = (props) => {
  if (isPhraseEnabled()) {
    return <span>{escapeId(props.id ?? '')}</span>;
  } else {
    return <IntlFormattedMessage {...props} />;
  }
};
