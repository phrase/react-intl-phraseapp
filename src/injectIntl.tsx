import * as React from 'react';
import { injectIntl as injectIntlReact } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';

export type ReactIntlPhraseProps = {
    translate: (_: string)=> string;
    formatMessage: (_: {id?: string}) => undefined | string;
    errors: {}
};

export function injectIntl(WrappedComponent: React.ComponentType<ReactIntlPhraseProps>, options?: Parameters<typeof injectIntlReact>[1]): ReturnType<typeof injectIntlReact> & React.FC<ReactIntlPhraseProps> {
    class InjectPhrase extends React.Component {
        state = { errors: {} };

        translate(keyName: string) {
            if (isPhraseEnabled()) {
                const escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
                return escapeId(escapedString);
            } else {
                return this.props['intl'].formatMessage({ "id": keyName })
            }
        }

        formatMessage(messageDescriptor: {id?: string}) {
            const { id } = messageDescriptor;
            if (!id) {
                console.error("formatMessage requires an id")
            } else {
                return this.translate(id);
            }
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
