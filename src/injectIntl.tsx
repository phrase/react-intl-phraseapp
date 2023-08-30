import { injectIntl as injectIntlReact, IntlFormatters, IntlShape, MessageDescriptor } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';
import React, { Component, ComponentType, FC } from 'react';


type DefinedState = {
    originalFormatMessage: (
        message: Parameters<IntlShape['formatMessage']>[0], 
        _values?: Parameters<IntlShape['formatMessage']>[1],
        _opts?: Parameters<IntlShape['formatMessage']>[2]
    ) => string;
  }

export function injectIntl(WrappedComponent: ComponentType<any>, options?: Parameters<typeof injectIntlReact>[1]): ReturnType<typeof injectIntlReact> {
    class InjectPhrase extends Component<any, DefinedState> {
        constructor(props) {
            super(props)
            this.state = {originalFormatMessage: this.props['intl'].formatMessage} as {originalFormatMessage: IntlShape['formatMessage']} ;
            this.props['intl'].translate = this.translate.bind(this);
            this.props['intl'].formatMessage = this.formatMessage.bind(this)
        }

        translate(keyName: string): string {
            if (isPhraseEnabled()) {
                const escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
                return escapeId(escapedString);
            } else {
                return this.state.originalFormatMessage({ "id": keyName });
            }
        }

        formatMessage(messageDescriptor: MessageDescriptor, _values?: any, _opts?: any): ReturnType<IntlFormatters<any>['formatMessage']> {
            const { id } = messageDescriptor;
            if (!id) {
                console.error("formatMessage requires an id")
            } else {
                return this.translate(id);
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }

    return injectIntlReact(InjectPhrase, options) as any;
}
