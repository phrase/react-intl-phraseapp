# react-intl-phraseapp Demo

This demo project shows how to integrate the [PhraseApp In-Context Editor](https://phraseapp.com/) into a React app using [react-intl](https://github.com/yahoo/react-intl) for localization via the [react-intl-phraseapp](https://github.com/phrase/react-intl-phraseapp) plugin.

## Install

    yarn install

## Configure

In order to run the demo you need to provide your phrase project ID and account ID. To do so:

- register at [phrase.com](https://phrase.com),
- create & setup new project (or use existing if you got one),
- go to "Project Settings",
- from the left hand side menu, select "API" tab,
- copy the project ID,
- you can find the account ID in your organizations page
- inside `index.js` file find & replace `projectId` and `accountId` with your own IDs

## Run

Start the server:

    yarn && yarn start

and then open the app at: [http://localhost:3000](http://localhost:3000/)

## Get help / support

Please contact [support@phrase.com](mailto:support@phrase.com?subject=[GitHub]%20) and we can take more direct action toward finding a solution.
