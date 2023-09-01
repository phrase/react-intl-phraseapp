'server-only'

import './App.css';
import ClassTestComponent from './ClassTestComponent';
import { getIntl } from './utils';

export default async function App() {
  const {formatMessage} = await getIntl();
  return (
    <div className="App">
      <h2>This is a simple demo of react-intl Next.js SSR integration of the In-Context Editor</h2>
      <p>
        {/* one can use FormattedMessage component */}
        {/* <FormattedMessage
          id="hero_title"
          defaultMessage={`We hope this example will help you integrate PhraseApp into your react app using react-intl`}
        /> */}
      </p>
      <p>
        {/* one can use formatMessage from useIntl hook */}
        {/* { formatMessage({ id: 'create_this_key', defaultMessage: 'Uncreated key to show creation capabilities.' }) } */}
      </p>

      {/* <ClassTestComponent translation="advantages_text" /> */}
    </div>
  );
}
