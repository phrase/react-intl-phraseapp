# react-intl-phraseapp

[![Build Status](https://travis-ci.org/phrase/react-intl-phraseapp.png)](https://travis-ci.org/phrase/react-intl-phraseapp)

react-intl-phraseapp is an addon for [react-intl](https://github.com/yahoo/react-intl) that lets you connect localized react applications to the Phrase In-Context Editor.

## Prerequisites

To use react-intl-phraseapp with your application you have to:

* Sign up for a Phrase account: [https://app.phrase.com/signup](https://app.phrase.com/signup)
* Use the excellent [react-intl](https://github.com/yahoo/react-intl) module by yahoo for localization in your react app

## Demo

You can find a demo project on [GitHub](https://github.com/phrase/react-intl-phraseapp-demo).

## Installation

### via NPM

```bash
npm install react-intl-phraseapp
```

### Build from source

You can also build it directly from source to get the latest and greatest:

```bash
npm run dist
```

### Development

```bash
npm install
```

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

If this does not work for you, you can also integrate the [JavaScript snippet manually](https://help.phrase.com/en/articles/2183908-integrate-in-context-editor-into-any-web-framework).

### Import from react-intl-phraseapp rather than from react-intl

Find all imports of `FormattedMessage`, `FormattedHTMLMessage` and change the source from `react-intl` to `react-intl-phrasapp`.

`import {FormattedMessage} from 'react-intl-phraseapp'`

## Browser support

This library might not work out of the box for some older browser or IE11. We recommend to add [Babel](https://github.com/babel/babel) to the build pipeline if those browser need to be supported.

## How does it work

The library inherits common components of the react-intl packages. In case you enabled Phrase by calling `initializePhraseAppEditor` the behaviour of the components will be changed.

## Support

**Question?** Contact us at: [phrase.com/contact](https://phrase.com/contact)

**Issue?** use GitHub issues and share the problem

## Test

Run unit tests using jest:

```bash
npm test
```
