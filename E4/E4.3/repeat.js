const person = {
    city: 'Moscow',
}

const student = Object.create(person);
student.ownCity = 'Piter';
console.log(student.city);
console.log(student);