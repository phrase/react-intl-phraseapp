import * as React from 'react';
import * as Utils from '../helper/test_utils';

import {FormattedMessage} from '../src/FormattedMessage';

test('translation should be rendered by default', () => {
    const { container }= Utils.createComponentWithIntl(<FormattedMessage id='key.id' defaultMessage="foo bar"/>);

    expect(container.firstChild).toMatchSnapshot();

});

test('key should be decorated with prefix/suffix', () => {
    Utils.setPhraseConfig();
    const { container } = Utils.createComponentWithIntl(<FormattedMessage id='key.id' defaultMessage="foo bar"/>);

    expect(container.firstChild).toMatchSnapshot();

});
