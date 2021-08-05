let num;
let text;

num = prompt('Введите значение');

num = +num;

if (typeof num == 'number'){
    if (Number.isNaN(num)){
        console.log("Упс, кажется, вы ошиблись")
    } else {
        text = num % 2 === 0 ? "Четное" : "Нечетное"
        console.log(text)
    }
} else {
    console.log("Упс, кажется, вы ошиблись")
}