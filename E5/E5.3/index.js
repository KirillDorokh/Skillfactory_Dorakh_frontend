//import './styles.css'
const content = 'Hellooooo from content'
// создаем элемент
const customDiv = document.createElement('div')

// заполняем div
customDiv.innerHTML = `<span id=\"custom\"> Hello! ${content}</span>`

document.getElementById('app').innerHTML = `<span id=\"custom2\"> Hello! ${content}</span>`
// ищем узел и добавляем элемент
const app = document.getElementById("app")

document.body.insertBefore(customDiv, app)

element = `<span> Kek ${content} </span>`
document.getElementById('app').insertAdjacentHTML("beforebegin", element)

const remove = document.getElementById('custom3')
document.getElementById('app2').removeChild(remove)

//new example
// Описываем переменную, которая будет контентом новых тегов
const content2 = 'Привет'
//Ищем родительский элемент и добавляем новые элементы в дерево DOM
const parent = document.getElementById('id')
parent.innerHTML = `<div><span id="custom">${content2}</span></div>`
const parent = document.getElementById("id");

parent.insertAdjacentHTML('afterend', `<div><span id="custom"> ${content}</span></div>`);