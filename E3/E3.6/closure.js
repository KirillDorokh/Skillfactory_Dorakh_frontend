const a = 1;

function foo(){
    const a = 2;
    console.log(a)
}

foo();
console.log(a)

const b = 2;
const sum = function(){
    const a = 1;
    // внутри функции нет переменной b, но она есть выше по коду
    return a + b
};

const result = sum();
console.log(result)