import {createElement} from 'react';
import {
    FormattedMessage as IntlFormattedMessage
} from 'react-intl';

import {escapeId, isPhraseEnabled} from './functions'

export class FormattedMessage extends IntlFormattedMessage {
    render() {
        if (isPhraseEnabled()) {
            return createElement("span", null, escapeId(this.props.id));
        } else {
            return super.render();
        }
    }
}
