'use strict'; // eslint-disable-line strict, lines-around-directive

console.log('hello from background wf!');

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log('The color is green.');
    });
});
