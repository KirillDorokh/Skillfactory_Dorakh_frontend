const person = {
    city: 'Moscow',
}

const student = Object.create(person);

student.ownCity = 'Piter';

console.log(student)
console.log(Object.getPrototypeOf(student))

for(let key in student){
    if(student.hasOwnProperty(key))
        console.log(key)
}
for(let key in student){
    console.log(key)
}