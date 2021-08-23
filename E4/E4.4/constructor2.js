function Candy(name) {
    this.tasty = 'delicious',
    this.name = name
}

Candy.prototype.getWeight = function(weight){
    console.log(`Weight is ${weight} g`)
}

function ChocoCandy(name, choco){
    this.name = name,
    this.choco = choco
}

ChocoCandy.prototype = new Candy()

ChocoCandy.prototype.getWeight = function(weight){
    console.log(`Candy weight is ${weight} g`)
}

const twix = new ChocoCandy('twix', 'milk');
const snikers = new Candy('snikers')

console.log(twix);
console.log(snikers)

twix.getWeight(47);
snikers.getWeight(50);

console.log(twix.tasty)
console.log(twix.weight)
console.log(snikers.weight)