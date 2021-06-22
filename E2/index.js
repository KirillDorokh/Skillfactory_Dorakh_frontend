let myage = 25;

console.log('Hello world and I\'m ' + myage);

age = prompt('Please enter dog\'s age');
dogsAge = age * 7;
alert('My dog\'s age is ' + dogsAge + ' human\'s age')

rub = prompt('plese enter sum of rub');
usd = rub * 0.014;
alert(rub + ' rub is ' + usd + ' usd');

const a = 1;
// если b = 2, выполнение программы “провалится” в if
const b = 2;
// если b = 3, выполнение программы “провалится” в else
// const b = 3;
const result = a + b;
if (result < 4){
    console.log("результат меньше 4")
}else{
    console.log("результат больше или равен 4")
}