import * as React from 'react'
import {IntlProvider} from 'react-intl';

const renderer = require('react-test-renderer');

export function setPhraseConfig() {
    Object.defineProperty(window, "PHRASEAPP_CONFIG", {
    writable: true,
    value: {
        prefix: '[[__',
        suffix: "__]]"
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

export const createComponentWithIntl = (children : any, props: {locale: string, messages?: Record<string, string>} = { locale: 'en' }) => {
    return renderer.create(
        <IntlProvider textComponent="span" {...props}>
            {children}
        </IntlProvider>
    );
};
