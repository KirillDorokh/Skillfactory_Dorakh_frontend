function example(func){
    // вызываем функцию, которую приняли как аргумент
    func();
    // возвращаем функцию
    return function(){
        console.log('enternal function')
    }
}
// функция, которую будем передавать как аргумент в функцию example
function argFunc(){
    console.log('function from arguments')
}
// в переменную resultFunc записываем результат выполнения функции example

// функция, которая передаётся как аргумент, должна быть без круглых скобок
const resultFunc = example(argFunc);
// после вызова example() внутри неё будет вызвана функция argFunc, которую мы передали как аргумент, и в консоли будет текст: function from arguments

// вызываем функцию
resultFunc();