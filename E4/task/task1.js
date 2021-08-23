const obj1 = {
    a: 1,
    'b': 2,
    true: 3,
}

function objectKeys(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`Ключ: ${key}`);
            console.log(`Значение: ${obj[key]}`);
        }
    }
}

objectKeys(obj1);
