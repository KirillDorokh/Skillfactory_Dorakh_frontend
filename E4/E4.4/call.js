var obj1 = {x: 4,
    m: function() {

        console.log(this.x); // console.log(obj.x)
    }
};
var obj2 = {x: 4,
    m: function() {

        console.log(this.x);
    }
};

console.log(obj1)
console.log(obj2)