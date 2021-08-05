let arr = [1, 3, 4, 'dsaf', null, NaN, undefined, true, 5, 6, [1, 2, 3], 0, 10, 15, 0 , 0];
let even = [];
let odd = [];
let zero = []
let another = [];


arr.forEach(function (item, index, array) {
    if (typeof item == 'number'){
            if (Number.isNaN(item)) {
                another.push(item);
            } else if (item === 0) {
                zero.push(item);
            } else {
                let cheak = item % 2 === 0 ? even.push(item) : odd.push(item)
            }
    }
});

console.log(`Количество четных элементов в массиве ${even.length}`);
console.log(`Количество нечетных элементов в массиве ${odd.length}`);
console.log(`Количество нулевых элементов в массиве ${zero.length}`);