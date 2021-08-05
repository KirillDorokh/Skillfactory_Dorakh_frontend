let arr = ['1', '1', '1'];
let prov = [];
let prov2 = [];

for (let i = 0; i < arr.length; i ++){
    if (arr[i] !== arr[i + 1]){
        prov.push(arr[i])
    }
}

console.log(prov.length === 1)
