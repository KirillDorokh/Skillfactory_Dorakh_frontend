let  a = Number(prompt('Введите первое число'));
const  b = Number(prompt('Введите второе число'));
let arr = [];

function add(){
    if(a <= b){
        for(let i = a; i <= b; i++){
            arr.push(i);
        }
        return `Условия ввода выполнены. Первое число ${a}, второе - ${b}`
    }else{
        return `Некорректный ввод`
    }
}

console.log(add());

const intervalId = setInterval(function counter(arr){
    console.log(arr[0]);
    arr.shift();
}, 1000, arr)
setTimeout(function(){
    clearInterval(intervalId);
}, (b - a + 1)*1000)