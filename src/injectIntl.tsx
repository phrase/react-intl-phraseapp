import * as React from 'react';
import { injectIntl as injectIntlReact } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';

export function injectIntl(WrappedComponent, options = {}) {
    class InjectPhrase extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.render = this.render.bind(this);
            this.translate = this.translate.bind(this);
            this.formatMessage = this.formatMessage.bind(this);

            this.state = { errors: {} };
        }

        translate(keyName) {
            if (isPhraseEnabled()) {
                const escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
                return escapeId(escapedString);
            } else {
                return this.props['intl'].formatMessage({ "id": keyName })
            }
        }

        formatMessage(messageDescriptor) {
            const { id } = messageDescriptor;
            return this.translate(id);
        }

        render() {
            return (
                <WrappedComponent
                    errors={this.state['errors']}
                    translate={this.translate}
                    formatMessage={this.formatMessage}
                    {...this.props}
                />
            );
        }
    }

    return injectIntlReact(InjectPhrase, options);
}
