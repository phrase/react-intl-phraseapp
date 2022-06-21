# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.2](https://github.com/phrase/react-intl-phraseapp/compare/v3.0.1...v3.0.2) (2022-06-21)

### Feat

* support react-intl >= 5.0.0. ([#69](https://github.com/phrase/react-intl-phraseapp/pull/69))

## [3.0.1](https://github.com/phrase/react-intl-phraseapp/compare/v3.0.0...v3.0.1) (2021-06-08)

### Fixes

* properly map `react` and `react-intl` dependencies in UMD build. ([#60](https://github.com/phrase/react-intl-phraseapp/pull/60))

## [3.0.0](https://github.com/phrase/react-intl-phraseapp/compare/v2.0.1...v3.0.0) (2020-06-24)

### ⚠ BREAKING CHANGES

* add support for `react-intl@>=4.0.0`! Please follow [upgrade guide](https://formatjs.io/docs/react-intl/upgrade-guide-4x) to make your app compatible (especially the ["Breaking API Changes" section](https://formatjs.io/docs/react-intl/upgrade-guide-4x#breaking-api-changes)) ([#49](https://github.com/phrase/react-intl-phraseapp/pull/49))
* remove deprecated `FormattedHTMLMessage` component. Please refer to `react-intl` upgrade guide mentioned above for more informations about this change. ([#49](https://github.com/phrase/react-intl-phraseapp/pull/49))

## [2.1.0](https://github.com/phrase/react-intl-phraseapp/compare/v1.0.0...v2.1.0) (2020-02-20)

### Features

* add back binding for functions within injectIntl ([c50d009](https://github.com/phrase/react-intl-phraseapp/commit/c50d0093441472ad9d037198f22ac4ac589c382d))

## [2.0.0](https://github.com/phrase/react-intl-phraseapp/compare/v1.0.0...v2.0.0) (2020-02-13)

### ⚠ BREAKING CHANGES

* remove unnecessary `state` property and `error` prop ([#39](https://github.com/phrase/react-intl-phraseapp/pull/39)) ([2c03b1b](https://github.com/phrase/react-intl-phraseapp/commit/2c03b1b041e398775e52d57378546557e38a4f81))
* add support for `react-intl@>=3.0.0`! Please follow [upgrade guide](https://formatjs.io/docs/react-intl/upgrade-guide-3x) to make your app compatible (especially the ["Breaking API Changes" section](https://formatjs.io/docs/react-intl/upgrade-guide-3x#breaking-api-changes)) ([#36](https://github.com/phrase/react-intl-phraseapp/pull/36)) ([3fb9c26](https://github.com/phrase/react-intl-phraseapp/commit/3fb9c2612ba164824144bcc08cb4809aae1039a1))
