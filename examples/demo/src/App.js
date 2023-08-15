import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.translate("welcome.headline")}</h2>
        </div>
        <p className="App-intro">
          <FormattedMessage
            id="welcome.intro"
            defaultMessage={`We hope this example will help you integrate PhraseApp into your react app using react-intl`}
          />
        </p>
        <p>{this.props.formatMessage({ id: "welcome.text" })}</p>
      </div>
    );
  }
}

export default injectIntl(App);
