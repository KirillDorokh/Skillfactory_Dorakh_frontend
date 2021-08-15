function Num(a){
    const result = Num2(a, Number(prompt('Введите второе число')));
    return result;
}

function Num2(a, b){
    return a + b;
}

const sum = Num(Number(prompt('Введите первое число')));

console.log(sum);