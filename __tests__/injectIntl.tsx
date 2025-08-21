import React from 'react';
import * as Utils from '../helper/test_utils';
import { injectIntl, WrappedComponentProps } from '../src';
import { IntlFormatters, MessageDescriptor,  } from 'react-intl';


const key = 'key.id';
const variable_key = 'variable_key.id';
const locale = 'en';
const messages = {
  [key]: 'Some translation',
  [variable_key]: '{variable} translation'
};

describe('injectIntl', () => {
  describe('translate', () => {
    let ComponentUnderTest;

    beforeEach(() => {
      function Component({ translate }: { translate: (keyName: string) => string; } & WrappedComponentProps) {
        const translation = translate(key);

        return (<div>{translation}</div>);
      }

      ComponentUnderTest = injectIntl(Component);
    });

    describe('when phrase is enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();

        const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

       expect(container.firstChild).toMatchSnapshot();
      });
    });

    describe('when phrase is not enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();
        Utils.disablePhrase();

        const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

         expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('formatMessage', () => {
    let ComponentUnderTest;

    beforeEach(() => {
      function Component({ formatMessage }: {
        formatMessage: (messageDescriptor: MessageDescriptor, values?: any, _opts?: any) => ReturnType<IntlFormatters<any>['formatMessage']> } & 
        WrappedComponentProps
      ) {
        const message = formatMessage({ id: key }, {name: 'Eric'});
        return (<div>{message}</div>);
      }
      ComponentUnderTest = injectIntl(Component);
    });

    describe('when phrase is enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();

        const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

        expect(container.firstChild).toMatchSnapshot();
      });

      describe("when variable on key", () => {
        beforeEach(() => {
          function Component({ formatMessage }: {
            formatMessage: (messageDescriptor: MessageDescriptor, values?: any, _opts?: any) => ReturnType<IntlFormatters<any>['formatMessage']> } & 
            WrappedComponentProps
          ) {
            const message = formatMessage({ id: variable_key }, {variable: 'Eric'});
            return (<div>{message}</div>);
          }
          ComponentUnderTest = injectIntl(Component);
        })

        test('key should be rendered using translate and injectIntl HOC', () => {
          Utils.setPhraseConfig();
  
          const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});
  
          expect(container.firstChild).toMatchSnapshot();
        });
      })
    });

    describe('when phrase is not enabled', () => {
      test('key should be rendered using translate and injectIntl HOC', () => {
        Utils.setPhraseConfig();
        Utils.disablePhrase();

       const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});

        expect(container.firstChild).toMatchSnapshot();
      });

      describe("when variable on key", () => {
        beforeEach(() => {
          function Component({ formatMessage }: {
            formatMessage: (messageDescriptor: MessageDescriptor, values?: any, _opts?: any) => ReturnType<IntlFormatters<any>['formatMessage']> } & 
            WrappedComponentProps
          ) {
            const message = formatMessage({ id: variable_key }, {variable: 'Eric'});
            return (<div>{message}</div>);
          }
          ComponentUnderTest = injectIntl(Component);
        })

        test('key should be rendered using translate and injectIntl HOC', () => {
          Utils.setPhraseConfig();
          Utils.disablePhrase();
  
          const { container } = Utils.createComponentWithIntl(<ComponentUnderTest />, {locale, messages});
  
          expect(container.firstChild).toMatchSnapshot();
        });
      })
    });
  });
});
