import {createElement} from 'react';
import {
    FormattedHTMLMessage as IntlFormattedHTMLMessage,
} from 'react-intl';

import {escapeId, isPhraseEnabled} from './functions'

export class FormattedHTMLMessage extends IntlFormattedHTMLMessage {
    render() {  
        if (isPhraseEnabled()) {
            let nodes = [escapeId(this.props.id)];
            return createElement("span", null, ...nodes);
        } else {
            return super.render();
        }    
    }
}
