'server-only'
import { IntlShape, createIntl, createIntlCache } from "@formatjs/intl";

export function getIntl() {
  const locale = 'en'
  const messages = {
    hero_title: "Enable the ICE by setting `phraseEnabled: true`!",
    advantages_text: "With the In-context Editor, clients are able to minimize errors by giving translators insight into the context of the translation and letting them edit the content right on the spot.",
    integrate_title: "Integrate the Phrase In-context Editor into your existing application",
    create_this_key: "This key doesn't exist yet, try creating it!",
    integrate_text: "We hope this example will help you integrate PhraseApp into your react app using react-intl",
    variable_text: "{variable} variable should show up when ICE is not enabled!"
  }

  const cache = createIntlCache();
  const intl = {
    ...createIntl({locale, messages}, cache),
    // Add condition here to overwrite formatMessage with this format when needed
    formatMessage: (
      messageDescriptor: Parameters<IntlShape['formatMessage']>[0],
      _values?: Parameters<IntlShape['formatMessage']>[1],
      _opts?: Parameters<IntlShape['formatMessage']>[2]
    ) => "{{__phrase_" + messageDescriptor.id + "__}}"
  }

  return intl
}
