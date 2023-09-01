'server-only'

import { createIntl } from '@formatjs/intl';
import { useSSRIntl as initIntl } from "react-intl-phraseapp/useSSRIntl";

export async function getIntl() {
  const locale = 'en'
  const messages = {
    hero_title: "Enable the ICE by setting `phraseEnabled: true`!",
    advantages_text: "With the In-context Editor, clients are able to minimize errors by giving translators insight into the context of the translation and letting them edit the content right on the spot.",
    integrate_title: "Integrate the Phrase In-context Editor into your existing application",
    create_this_key: "This key doesn't exist yet, try creating it!",
    integrate_text: "We hope this example will help you integrate PhraseApp into your react app using react-intl",
    variable_text: "{variable} variable should show up when ICE is not enabled!"
  }
  const intl = initIntl({locale, messages})
  return intl
}
