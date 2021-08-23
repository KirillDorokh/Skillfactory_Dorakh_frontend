const lang = prompt('Input language name', 'javascript');

const collection = {
    [lang]:'The best language!',
};

console.log(collection[lang]);
console.log(collection)