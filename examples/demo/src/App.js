import './App.css';
import { FormattedMessage, useIntl } from 'react-intl-phraseapp';

function App() {
 const {formatMessage} = useIntl()
  
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
      id="hero_description"
      formatMessage={''}
      defaultMessage={`Click the pen icon on the text and interact with our In-context Editor in the lower half of the screen. Change the original text or click the flag icon to change languages. Try it out!`}
    />
    </p>
    <p>
    <FormattedMessage
      id="create_this_key"
      formatMessage={''}
      defaultMessage={`Uncreated key to show creation capabilities.`}
    />
    </p>
    <p>
      {formatMessage({id: 'integrate_text'})}
    </p>
    <p>
      {formatMessage({id: 'advantages_text'})}
    </p>
  </div>
  );
}

export default App;
