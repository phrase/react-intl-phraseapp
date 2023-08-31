import { injectIntl as injectIntlReact, IntlFormatters, MessageDescriptor, useIntl, WrappedComponentProps, WithIntlProps } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';
import React from 'react';

export function injectIntl<
  IntlPropName extends string = 'intl',
  P extends WrappedComponentProps<IntlPropName> = WrappedComponentProps<any>
>(
  WrappedComponent: React.ComponentType<P>,
  options?: Parameters<typeof injectIntlReact>[1]
): React.ComponentType<WithIntlProps<P>> & {
  WrappedComponent: typeof WrappedComponent
} {
	const PhraseComponent = (props: P) => {
		const { formatMessage: reactIntlFormatMessage } = useIntl();
		props['intl'].formatMessage = formatMessage
	
		function translate(keyName: string, values: Record<string, any>): string {
			if (isPhraseEnabled()) {
				const escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
				return escapeId(escapedString);
			} else {
				return reactIntlFormatMessage({ "id": keyName }, values);
			}
		}

		function formatMessage(messageDescriptor: MessageDescriptor, values?: any, _opts?: any): ReturnType<IntlFormatters<any>['formatMessage']> {
			const { id } = messageDescriptor;
			if (!id) {
				console.error("formatMessage requires an id");
			} else {
				return translate(id, values);
			}
		}

		return (
			<WrappedComponent
				translate={translate}
				formatMessage={formatMessage}
				{...props}
			/>
		);
	} 
	
  return injectIntlReact(PhraseComponent, options) as any;
};
