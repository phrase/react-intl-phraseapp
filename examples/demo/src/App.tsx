import './App.css';
import { FormattedMessage, WrappedComponentProps, injectIntl } from 'react-intl-phraseapp';
import ClassTestComponent from './ClassTestComponent';

function App(props: WrappedComponentProps) {
return (
  <div className="App">
    <h2>This is a simple demo of react-intl integration of the In-Context Editor</h2>
    <p>
      <FormattedMessage
        id="hero_title"
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
      {props.intl.formatMessage({id: 'integrate_title', defaultMessage: 'foo'})}
    </p>
    <ClassTestComponent translation="advantages_text"/>
  </div>
  );
}

export default injectIntl(App);
