# react-intl-phraseapp

![Build status](https://github.com/phrase/react-intl-phraseapp/workflows/Test/badge.svg)

**react-intl-phraseapp** is the official library for integrating [Phrase Strings In-Context Editor](https://support.phrase.com/hc/en-us/articles/5784095916188-In-Context-Editor-Strings) with [react-intl](https://github.com/yahoo/react-intl) in your React application.

## :scroll: Documentation

### Prerequisites

To use react-intl-phraseapp with your application you have to:

* Sign up for a Phrase account: [https://app.phrase.com/signup](https://app.phrase.com/signup)
* Use the excellent [react-intl](https://github.com/yahoo/react-intl) module by yahoo for localization in your react app

### Demo

You can find a demo project on [GitHub](https://github.com/phrase/react-intl-phraseapp-demo).

### Installation

#### via NPM

```bash
npm install react-intl-phraseapp
```

#### Build from source

You can also build it directly from source to get the latest and greatest:

```bash
npm run dist
```

### Development

```bash
# install deps
npm install
```

#### Configure

Add the following JavaScript snippet to your react app.

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

You can find the Project-ID in the Project overview in the PhraseApp Translation Center.

If this does not work for you, you can also integrate the [JavaScript snippet manually](https://help.phrase.com/help/integrate-in-context-editor-into-any-web-framework).

To use the old version of ICE, use option `useOldICE: true` in your PHRASEAPP_CONFIG or integration options
```js
let config = {
  projectId: '<YOUR_PROJECT_ID>',
  phraseEnabled: true,
  useOldICE: true,
};

initializePhraseAppEditor(config);
```

#### Using the US Datacenter with ICE

In addition to `phraseEnabled` and `projectId` in the config, also add the US specific URLs to enable working through the US endpoint.
```js
  baseUrl: "https://us.app.phrase.com",
  apiBaseUrl: 'https://api.us.app.phrase.com/api/v2',
  oauthEndpointUrl: "https://api.us.app.phrase.com/api/v2/authorizations",
  profileUrl: "https://us.app.phrase.com/settings/profile",
```

#### Import from react-intl-phraseapp rather than from react-intl

Find all imports of `FormattedMessage`, and change the source from `react-intl` to `react-intl-phraseapp`.

`import {FormattedMessage} from 'react-intl-phraseapp'`

### Browser support

This library might not work out of the box for some older browser or IE11. We recommend to add [Babel](https://github.com/babel/babel) to the build pipeline if those browser need to be supported.

### How does it work

The library inherits common components of the react-intl packages. In case you enabled Phrase by calling `initializePhraseAppEditor` the behaviour of the components will be changed.

### Test

Run unit tests using jest:

```bash
npm test
```

## :white_check_mark: Commits & Pull Requests

We welcome anyone who wants to contribute to our codebase, so if you notice something, feel free to open a Pull Request! However, we ask that you please use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for your commit messages and titles when opening a Pull Request.

Example: `chore: Update README`

## :question: Issues, Questions, Support

Please use [GitHub issues](https://github.com/phrase/react-intl-phraseapp/issues) to share your problem, and we will do our best to answer any questions or to support you in finding a solution.

## :memo: Changelog

Detailed changes for each release are documented in the [changelog](https://github.com/phrase/react-intl-phraseapp/releases).