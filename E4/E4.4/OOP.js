const user = {
    name: 'Ivan',
    age: 18,
    position: 'developer',
}

// инкапсуляция
function a(){
    const b = 1;
}

// абстракция
function calculator(a, b){
    return a + b
}

// полиморфизм
function f1(){
    const a = 1;
}
function f2(){
    const a = 2;
}

// наследование
function A() {

}

function B() {

}

B.prototype = A;

class A {}
class B extends A {}

