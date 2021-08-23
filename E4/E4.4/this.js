//'use strict'

// как метод объекта
const user = {
    name: 'Ivan',
    getName: function (){
        console.log(this)
    },
}

user.getName()

//call, apply, bind
user.getName.call({ surname: 'Ivanov' })

// как обычная функция, объявленая через function
function func(){
    console.log(this)
}

func()

//как функция конструктор
const ex = new func();

const user2 = {
    name: 'Sasha',
    getName: () => {
        console.log(this)
    }
}
user2.getName()