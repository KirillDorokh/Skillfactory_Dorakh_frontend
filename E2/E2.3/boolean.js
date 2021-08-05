var a = true;
var b = false;
var c = undefined;
var d = null;

console.log(a || b);

console.log(c && d);

const e = 1;
const f = 2;

const result = a + b;
if (result < 4){
    console.log('result lower than 4')
} else {
    console.log('result more or equal 4')
}

var bankBalance = 15000;
var price = 9999;

if (price <= bankBalance){
    console.log("Yes, you can buy it")
} else if (price < 10000){
    console.log("Top up your balance")
} else {
    console.log("We don't need this device")
}

const switch1 = 1;
const switch2 = 2;
const result1 = switch1 + switch2;

switch(result1) {
    case 0:
        console.log('result = 0')
        break;
    case 1:
        console.log('result = 1')
        break;
    case 2:
        console.log('result = 2')
        break;
    case 3:
        console.log('result = 3')
        break;
    default:
        console.log('result != 1, 2, 3')
}

let text = ''

if (result < 4){
    text = 'result < 4'
} else {
    text = 'result >= 4'
}
console.log(text);
text = result < 4 ? " result < 4" : "result >= 4"
console.log(text);