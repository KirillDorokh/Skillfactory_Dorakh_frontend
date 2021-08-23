const user = {
    name: 'Andrey',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

const obj = {
    a: 'hello',
    b: 123,

}

// or

const obj2 = new Object();

const obj3= {
    a: 1,
    hello: 2,
    '': 3,
    123: 4,
    var: 5,
    f: function(){
        console.log(1);
    },
};

const key = 'hello';

console.log(obj3.hello);
console.log(obj3['hello']);
console.log(obj3[key]);
console.log(obj3[123]);
console.log(obj3['f']);
obj3.hello = 3;
console.log(obj3['hello']);
delete obj3.hello;
console.log(obj3);

const obj4 = {a : 1}
const obj5 = obj4;

console.log(obj4 === obj5);
obj4.b = 2;
console.log(obj4 === obj5);


console.log('a' in obj4);
console.log('c' in obj5);

for(let key in obj3){
    console.log(key);
}

for(let key in obj3){
    console.log(obj3[key]);
}