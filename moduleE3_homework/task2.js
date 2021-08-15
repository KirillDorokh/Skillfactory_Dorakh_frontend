function simpleNum(a){
    if (a > 1000){
        return `${a} больше 1000`;
    } else if (a === 1) {
        return`${a} не является ни простым ни составным`;
    } else if (a < 1) {
        return`${a} не является натуральным числом`;
    } else {
        for (i = 2; i < a; i++){
            console.log(i)
            if(a % i === 0) {
                return `${a} является составным числом`;
            }
        } return `${a} является простым числом`;
    }
}

console.log(simpleNum(1000));