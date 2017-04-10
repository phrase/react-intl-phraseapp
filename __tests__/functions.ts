import * as functions from '../src/functions'
import {jsdom} from 'jsdom';

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
let config = {}
let phraseEnabled = true

test('translation should be rendered by default', () => {
    
    functions.initializePhraseAppEditor(config, phraseEnabled)

    expect(document.getElementsByTagName('script')[0].src)
        .toMatch(/https:\/\/phraseapp.com\/assets\/in-context-editor\/2.0\/app.js\?[\d]/);
});