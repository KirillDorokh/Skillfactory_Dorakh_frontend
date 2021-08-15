const arr = [1, 2, 3];

arr.forEach(function(item){
    console.log(item + 1);
})

const sum = function(a, b){
    console.log(arguments);
    console.log(a + b);
}

setTimeout(sum, 3000, 1, 2, 3);

const intervalId = setInterval(sum, 1000, 2, 3);
setTimeout(function(){
    clearInterval(intervalId);
}, 5000)
