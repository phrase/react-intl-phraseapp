# react-intl-phraseapp

[![Build Status](https://travis-ci.org/phrase/angular-phrase.png)](https://travis-ci.org/phrase/angular-phrase)

react-intl-phraseapp is an addon for [react-intl](https://github.com/yahoo/react-intl) that lets you connect localized react applications to the PhraseApp In-Context Editor.

## Prerequisites

To use react-intl-phraseapp with your application you have to:

* Sign up for a PhraseApp account: [https://phraseapp.com/en/signup](https://phraseapp.com/en/signup)
* Use the excellent [react-intl](https://github.com/yahoo/react-intl) module by yahoo for localization in your react app

## Demo

You can find a demo project on [GitHub](https://github.com/phrase/react-intl-phraseapp-demo).

## Installation

### via NPM:

    npm install react-intl-phraseapp

### Build form source

You can also build it directly from source to get the latest and greatest:

    npm run dist

### Development

	npm install


### Configure

```js
let config = {
  projectId: '<YOUR_PROJECT_ID>',
  phraseEnabled: true,
  prefix: "[[__",
  suffix: "__]]",
  fullReparse: true
};
```

You can find the Project-ID in the Project overview in the PhraseApp Translation Center

### JavaScript snippet

Add the following snippet to your react app.

```js
import {initializePhraseAppEditor} from 'react-intl-phraseapp'

let config = {
  projectId: '<YOUR_PROJECT_ID>',
  phraseEnabled: true,
  prefix: "[[__",
  suffix: "__]]",
  fullReparse: true
};

initializePhraseAppEditor(config);
```

If this does not work for you, you can also integrate the [JavaScript snippet manually](https://help.phraseapp.com/phraseapp-for-developers/how-to-setup-and-configure-the-phraseapp-in-context-editor-ice/integrate-in-context-editor-into-any-web-framework).

### Import from react-intl-phrasapp rather than from react-intl

Find all imports of `FormattedMessage`, `FormattedHTMLMessage` and change the source from `react-intl` to `react-intl-phrasapp`.

`import {FormattedMessage} from 'react-intl-phraseapp'`

## How does it work?

The library inherits common components of the react-intl packages. In case you enabled PhraseApp by calling `initializePhraseAppEditor` the behaviour of the components will be changed.

## Support

**Question?** Contact us at: [phraseapp.com/contact](https://phraseapp.com/contact)

**Issue?** use GitHub issues and share the problem

## Test

Run unit tests using jest:
```
npm test
```
