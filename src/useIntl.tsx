import { useIntl as useReactIntl, MessageDescriptor, PrimitiveType } from 'react-intl';
import { escapeId, isPhraseEnabled } from './functions';

export function useIntl() {
    const intl = useReactIntl();
    if (isPhraseEnabled()) {

        function wrappedFormatMessage(
            descriptor: MessageDescriptor,
            values?: Record<string, PrimitiveType | React.ReactNode>,
            opts?: any
        ): string | React.ReactNode[] {
            return escapeId(descriptor?.id || '');
        }

        return { ...intl, formatMessage: wrappedFormatMessage };
    } else {
        return intl;
    }
};
