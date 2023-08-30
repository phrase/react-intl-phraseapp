import './App.css';
import { FormattedMessage, useIntl } from 'react-intl-phraseapp';
import ClassTestComponent from './ClassTestComponent';

const App = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="App">
      <h2>This is a simple demo of react-intl integration of the In-Context Editor</h2>
      <p>
        {/* one can use FormattedMessage component */}
        <FormattedMessage
          id="hero_title"
          defaultMessage={`We hope this example will help you integrate PhraseApp into your react app using react-intl`}
        />
      </p>
      <p>
        {/* one can use formatMessage from useIntl hook */}
        { formatMessage({ id: 'create_this_key', defaultMessage: 'Uncreated key to show creation capabilities.' }) }
        <FormattedMessage
          id="create_this_key"
          defaultMessage={`Uncreated key to show creation capabilities.`}
        />
      </p>

      <ClassTestComponent translation="advantages_text" />
    </div>
  );
}

export default App;
