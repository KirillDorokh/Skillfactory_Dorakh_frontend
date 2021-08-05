let lostNums = [4, 8, 15, 16, 23, 42];
let sum = 0;
console.log(lostNums);

for(let i = 0; i < lostNums.length; i++){
    sum = lostNums[i]
    debugger
}

console.log(sum)

let arr = ['apple'];
arr.unshift('orange');
console.log(arr);
arr.push('strawberry');
console.log(arr);
arr.shift();
console.log(arr);
arr.pop()
console.log(arr);

let arr1 = ['я', 'прохожу', 'курс'];
arr1.splice(arr1.length, 0, 'в', 'Skillfactory')
console.log(arr1);

let arr2 = [ "Сегодня"];
let arr3 = arr1.concat(arr2)
console.log(arr3)

let arr4 = [1, 2, 3];
let result = arr4.map(function(item, index, array){
    return item + 1
});
console.log(arr4);
console.log(result);

let result1 = arr4.reduce(function(sum, item, index, array){
    return sum + item
}, 0);
console.log(result1)