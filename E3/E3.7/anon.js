(function(){
    console.log(1)
})();

(function(){
    console.log(2)
}());

const a = 3;
const b = 4;
const sum = function summa(){
    const result = a + b;
    console.log(result);
};

sum();