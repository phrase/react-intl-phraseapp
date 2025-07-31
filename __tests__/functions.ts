import {initializePhraseAppEditor}  from '../src/functions';

beforeEach(() => {
    const scripts = document.getElementsByTagName('script');
    for(let i =0; i< scripts.length; i++) {
        scripts[i].remove();
    }
})

test('with old ICE: translation should be rendered by default', () => {
    let config = {phraseEnabled: true, useOldICE: true, forceInitialize: true};
    initializePhraseAppEditor(config);

    expect(document.getElementsByTagName('script')[0].src)
        .toMatch(/https:\/\/app.phrase.com\/assets\/in-context-editor\/2.0\/app.js\?[\d]/);
});

test('translation should be rendered by default', () => {
    let config = {phraseEnabled: true, useOldICE: false, forceInitialize: true};
    initializePhraseAppEditor(config);

    expect(document.getElementsByTagName('script')[0].src)
        .toMatch('https://cdn.phrase.com/latest/ice/index.js');
});
