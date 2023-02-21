import * as React from 'react';
import * as Utils from '../helper/test_utils';
import { injectIntl, ReactIntlPhraseProps } from '../src';

const key = 'key.id';
const locale = 'en';
const messages = {
  [key]: 'Some translation'
};

describe('injectIntl', () => {
  describe('translate', () => {
    let ComponentUnderTest;

    beforeEach(() => {
      function Component({ translate }: ReactIntlPhraseProps) {
        const translation = translate(key);

        return (<div>{translation}</div>);
      }

      ComponentUnderTest = injectIntl(Component);
    });

    describe('when phrase is enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();

        const component = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
      });
    });

    describe('when phrase is not enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();
        Utils.disablePhrase();

        const component = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('formatMessage', () => {
    let ComponentUnderTest;

    beforeEach(() => {
      function Component({ formatMessage }: ReactIntlPhraseProps) {
        const message = formatMessage({ id: key }, {name: 'Eric'});

        return (<div>{message}</div>);
      }

      ComponentUnderTest = injectIntl(Component);
    });

    describe('when phrase is enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();

        const component = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
      });
    });

    describe('when phrase is not enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();
        Utils.disablePhrase();

        const component = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
