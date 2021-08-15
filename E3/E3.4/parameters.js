function getSum(a, b= 0){
    console.log(a + b);
    console.log(arguments);
}

getSum(4, 2);

console.log(getSum.length)

function getSum2(a, b){
    const result = a + b;
    return result;
    console.log() //не вызовется никогда
}

const str = `Сумма двух чисел ${getSum2(1, 2)}`

console.log(str);