import * as React from 'react';
import * as Utils from '../helper/test_utils';

import {FormattedMessage} from '../src/FormattedMessage';

test('translation should be rendered by default', () => {
    const component = Utils.createComponentWithIntl(<FormattedMessage id='key.id' defaultMessage="foo bar"/>);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

test('key should be decorated with prefix/suffix', () => {
    Utils.setPhraseConfig();
    const component = Utils.createComponentWithIntl(<FormattedMessage id='key.id' defaultMessage="foo bar"/>);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
