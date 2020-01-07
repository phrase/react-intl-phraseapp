import {createElement} from 'react';
import {
    FormattedMessage as IntlFormattedMessage
} from 'react-intl';

import {escapeId, isPhraseEnabled} from './functions'

export class FormattedMessage extends IntlFormattedMessage {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        if (isPhraseEnabled()) {
            let nodes = [escapeId(this.props.id)];
            return createElement("span", null, ...nodes);

        } else {
            return super.render();
        }
    }
}
