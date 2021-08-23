const obj = new Object();

const obj2 = {
    a: 1,
    f: function(){
        console.log(123);
    },
};
console.log(obj2['f']);
console.log(obj2.a);
console.log(obj2['a']);
console.log(obj2)


const lang = 'JS'
const collection = {
    [lang] : 'Лучший язык программирования',
};
console.log(collection);

func = obj2.f;

func()

delete obj2['a'];
console.log(obj2);
console.log('f' in obj2);

for(key in obj2){
    console.log(key)
}
for(key in obj2){
    console.log(obj2[key])
}