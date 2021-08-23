const person = {
    city: "Moscow"
}

const student = Object.create(person);

student.ownCity = 'Peter'

console.log(student.city)
console.log(Object.getPrototypeOf(student))

function Candy(weight){
    this.tasty = 'delcious';
    this.getWeight = function (){
        console.log('This candy has weight ' + weight + ' kg')
    }
}

const newYearGift = new Candy(1)

newYearGift.getWeight()