import * as functions from '../src/functions'

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
let config = {phraseEnabled: true}
let phraseEnabled = true

test('translation should be rendered by default', () => {

    functions.initializePhraseAppEditor(config)

    expect(document.getElementsByTagName('script')[0].src)
        .toMatch(/https:\/\/app.phrase.com\/assets\/in-context-editor\/2.0\/app.js\?[\d]/);
});
