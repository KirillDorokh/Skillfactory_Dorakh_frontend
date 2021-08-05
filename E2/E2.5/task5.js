let arr = [0, 1, 2, 3, 4, 5]

console.log(arr.length)

arr.forEach(function(item, i, arr){
    console.log(item)
});

//или
console.log('вариант 2')
arr.map(function (item){
    console.log(item)
})