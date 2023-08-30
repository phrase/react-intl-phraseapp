import { Component } from 'react';
import { WrappedComponentProps } from 'react-intl';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';

type Props = WrappedComponentProps & {translation: 'string'}

class ClassTestComponent extends Component<Props> {
  render() {
    return (
      <div>
        <h3>Class component:</h3>
        <p>
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
          {this.props.intl.formatMessage({ id: this.props.translation })}
        </p>
      </div>
    );
  }
}

export default injectIntl(ClassTestComponent);
