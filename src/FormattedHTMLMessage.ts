import {createElement} from 'react';
import {
    FormattedHTMLMessage as IntlFormattedHTMLMessage,
} from 'react-intl';

import {escapeId, isPhraseEnabled} from './functions'

export class FormattedHTMLMessage extends IntlFormattedHTMLMessage {
    render() {  
        if (isPhraseEnabled()) {
            return createElement("span", null, escapeId(this.props.id));
        } else {
            return super.render();
        }    
    }
}
