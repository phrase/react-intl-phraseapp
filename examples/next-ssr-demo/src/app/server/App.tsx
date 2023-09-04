'server-only'

import './App.css';
import { getIntl } from './utils';

export default async function App() {
  const { formatMessage } = getIntl();
  return (
    <div className="App">
      <h2>This is a simple demo of react-intl Next.js SSR integration of the In-Context Editor</h2>
      <p>
        {/* FormattedMessage cannot be used because of internal context use that is not available on server components */}
      </p>
      <p>
        {/* One can use formatMessage as defined by getIntl */}
        { formatMessage({ id: 'hero_title'}) }
      </p>
      <p>
        { formatMessage({ id: 'advantages_text'}) }
      </p>
      <p>
        { formatMessage({ id: 'create_this_key'}) }
      </p>
      <p>
        { formatMessage({ id: 'integrate_text'}) }
      </p>
      <p>
        { formatMessage({ id: 'variable_text'}) }
      </p>

      {/* Class components cannot be SSR */}
    </div>
  );
}
