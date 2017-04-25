import * as React from 'react'
import {IntlProvider} from 'react-intl';

const renderer = require('react-test-renderer')

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

export const createComponentWithIntl = (children : any, props = { locale: 'en' }) => {
    return renderer.create(
        <IntlProvider {...props}>
            {children}
        </IntlProvider>
    );
};