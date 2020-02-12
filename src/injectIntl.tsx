import * as React from 'react';
import { injectIntl as injectIntlReact } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';

export type ReactIntlPhraseProps = {
    translate: (_: string)=> string;
    formatMessage: (_: {id?: string}) => string;
};

export function injectIntl(WrappedComponent: React.ComponentType<ReactIntlPhraseProps>, options?: Parameters<typeof injectIntlReact>[1]): ReturnType<typeof injectIntlReact> & React.FC<ReactIntlPhraseProps> {
    class InjectPhrase extends React.Component implements ReactIntlPhraseProps {
        translate(keyName: string): ReturnType<ReactIntlPhraseProps['translate']> {
            if (isPhraseEnabled()) {
                const escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
                return escapeId(escapedString);
            } else {
                return this.props['intl'].formatMessage({ "id": keyName })
            }
        }

        formatMessage(messageDescriptor: {id?: string}): ReturnType<ReactIntlPhraseProps['formatMessage']> {
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
                    translate={this.translate}
                    formatMessage={this.formatMessage}
                    {...this.props}
                />
            );
        }
    }

    return injectIntlReact(InjectPhrase, options);
}
