// class
class Parent {
    constructor(ownCity) {
        this.ownCity = ownCity;
        this.hasFlat = true;
    }
    getInfo() {
        console.log(`I live in ${this.ownCity}`);
    }
}

const parent = new Parent('Moscow');
parent.getInfo()

//constructor
//function Parent(ownCity) {
//    this.ownCity = ownCity;
//    this.hasFlat = true;
//}

//Parent.prototype.getInfo() {
//   console.log(`I line in ${this.ownCity}`)
//}

