let user = {
    name: 'Ivan',
    age: 30
}

console.log(user);

let map = new Map();
map.set("1", "string");
map.set(1, "number");
map.set(true, "boolean");

console.log(map.get(1));
console.log(map.get(true));

alert(map.size)

let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry",    "blue"]

]);

for (let name of fruits.keys()){
    console.log(name)
}

for (let color of fruits.values()){
    console.log(color)
}

for (let elem of fruits) { // то же самое, что и fruits.entries()

    console.log(elem); // apple, green, strawberry, red, blueberry, blue

}