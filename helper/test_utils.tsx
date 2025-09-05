import * as React from 'react'
import { IntlProvider } from 'react-intl'
import { render } from '@testing-library/react'

export function setPhraseConfig() {
    Object.defineProperty(window, "PHRASEAPP_CONFIG", {
        writable: true,
        value: {
            prefix: '{{__',
            suffix: "__}}"
        }
    });
    Object.defineProperty(window, "PHRASEAPP_ENABLED", {
        writable: true,
        value: true
    });
}

export function disablePhrase() {
    Object.defineProperty(window, "PHRASEAPP_ENABLED", {
        writable: true,
        value: false
    });
}

export const createComponentWithIntl = (
    children: React.ReactNode,
    props: { locale: string, messages?: Record<string, string> } = { locale: 'en' }
) => {
    return render(
        <IntlProvider {...props}>
            {children}
        </IntlProvider>
    );
};