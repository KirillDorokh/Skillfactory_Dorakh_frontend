let firstName = 'Ivan';

let result = `${firstName} glad to see you!`

console.log(result)

let lastName = 'Ivanov';

function getFullName(strings, firstNameExp, lastNameExp) {
    let str0 = strings[0]; // "My first name is"
    let str1 = strings[1]; // "and the last"
    return `${str0}${firstNameExp}${str1}${lastNameExp}`;
}
let result1 = getFullName`My first name is ${firstName} and the last ${lastName}`
console.log(result1)


let str = 'Count';
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(0,3));

let test = 'I love Java Script'
let resultTest;

if(test.includes("love")){
    resultTest = test.toUpperCase()
} else {
    resultTest = test.toLowerCase()
}
console.log(resultTest)
console.log(resultTest.slice(1,4))