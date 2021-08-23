const obj1 = {
    a: 1,
    'b': 2,
    true: 3,
}

const checkKeys = function(str, obj){
    if(str in obj){
        return true
    } else {
        return false
    }
}

console.log(checkKeys('a', obj1));