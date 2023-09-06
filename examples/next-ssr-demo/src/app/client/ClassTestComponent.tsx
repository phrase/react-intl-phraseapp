'use client'

import { Component } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl-phraseapp';

type Props = WrappedComponentProps & { translation: string };

class ClassTestComponent extends Component<Props> {
  render() {
    return (
      <div>
        <h3>Class component:</h3>
        <p>
           {/* one can use Formatted Message */}
          <FormattedMessage
            id="integrate_text"
            defaultMessage={`We hope this example will help you integrate PhraseApp into your react app using react-intl`}
            />
        </p>
        <p>
        <FormattedMessage
          id="create_this_key"
          defaultMessage={`Uncreated key to show creation capabilities.`}
        />
        </p>
        <p>
          {/* or use HOC injectIntl wrapper to use the intl.formatMessage prop
              WrappedComponentProps must be typed with the component's props! */}
          {this.props.intl.formatMessage({ id: this.props.translation })}
        </p>
        <p>
          {this.props.intl.formatMessage({id: 'variable_text'}, {variable: <b>SomeVariableForTest</b>})}
        </p>
      </div>
    );
  }
}

export default injectIntl(ClassTestComponent);
