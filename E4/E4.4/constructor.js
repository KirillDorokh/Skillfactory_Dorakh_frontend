function Candy(weight) {
    this.tasty = 'delicious',
    this.weight = weight,
    this.getWeight = function(){
        console.log(`Weight is ${weight} g`)
    }
}

const twix = new Candy(47);
const snikers = new Candy(50);

console.log(twix, snikers);

twix.getWeight();
snikers.getWeight();