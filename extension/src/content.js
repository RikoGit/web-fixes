'use strict';

function getMessageAboutStrict() {
    return this === undefined ? 'strict mode' : 'non-strict mode';
}

console.log(getMessageAboutStrict());
console.log('hello from content wf!');

const myCode = `
    console.log("Hello from click");
    console.log(location.href);

`;

const runCode = (code) => {
    // eslint-disable-next-line no-new-func
    Function(`'use strict';${code}`)();
};

// document.addEventListener('load', () => runCode(myCode));
document.body.addEventListener('click', () => runCode(myCode));
