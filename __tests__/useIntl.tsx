import * as React from 'react';
import * as Utils from '../helper/test_utils';
import { injectIntl, useIntl } from '../src';

type MessageDescriptor = {
  id: string;
  defaultMessage?: string;
  description?: string | object;
};

let ComponentUnderTest;
const messages: Record<string, MessageDescriptor> = {
  greeting: {
    id: 'app.greeting',
    defaultMessage: 'Hello, {name}!',
    description: 'Greeting to welcome the user to the app',
  },
};

describe('useIntl', () => {
  beforeEach(() => {
    function Component() {
      const { formatMessage } = useIntl();
      return (<div>{formatMessage(messages.greeting, { name: 'Eric' })}</div>);
    }
    ComponentUnderTest = Component;
  });

  describe('useIntl', () => {
    it('used underlying useIntl', () => {
      const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with phrase enabled', () => {
    beforeEach(() => {
      Utils.setPhraseConfig();
    });

    it('uses wrapped useIntl', () => {
      const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
