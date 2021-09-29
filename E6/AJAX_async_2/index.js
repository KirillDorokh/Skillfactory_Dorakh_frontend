// Урл для запроса. Возвращает 4k картинку, которая много весит.
const reqUrl = "https://i.picsum.photos/id/237/4096/2160.jpg";

// JS анимация. Необходимо для наглядного примера
const animNode = document.querySelector('.j-anim--block');
const steps = ['(0, 0)', '(20px, 0)', '(20px, 20px)', '(0, 20px)'];
let stepValue = 0;
setInterval(() => {
    if (!steps[stepValue]) { stepValue = 0; }
    stepValue += 1;
    animNode.style = `transform: translate${steps[stepValue]};`
}, 300);

/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * async - флаг вкл/выкл асинхронности
 */
function useRequest(async) {
    var xhr = new XMLHttpRequest();
    console.log('1');
    xhr.open('GET', reqUrl, async);
    console.log('2');
    xhr.send();
    console.log('3');

    console.log('4 Статус ответа: ', xhr.status);

    xhr.onload = function() {
        console.log('5 Статус ответа: ', xhr.status);
    };

    console.log('6');
};


const btnAsync = document.querySelector('.j-btn-async-request');
const btnSync = document.querySelector('.j-btn-sync-request');

// Не кнопку вешаем обработчик асинхронного запроса
btnAsync.addEventListener('click', () => {
    useRequest(true);
});

// Не кнопку вешаем обработчик синхронного запроса
btnSync.addEventListener('click', () => {
    useRequest(false);
});