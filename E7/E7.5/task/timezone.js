const btn = document.querySelector(".j-btn-test");
const timezone = document.querySelector("#timezone");
const datetime = document.querySelector("#datetime");

const xhr = new XMLHttpRequest();

// Функция, выводящая текст об ошибке
const error = () => {
    status.textContent = 'Невозможно получить ваше местоположение';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    let url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;
    let result;
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status != 200) { // HTTP ошибка?
            // Если статус не 200 (указывает, что запрос выполнен успешно),
            // то обрабатываем отдельно
            console.log('Статус ответа: ', xhr.status);
        } else {
            // Ответ мы получаем в формате JSON, поэтому его надо распарсить
            // console.log('Ответ сервера JSON', xhr.response);

            // Парсим и выводим ответ сервера
            console.log('Результат: ', JSON.parse(xhr.response));
            result = JSON.parse(xhr.response)
            console.log('result', result)
            timezone.textContent = `${result.timezone}`
            datetime.textContent = `${result.date_time_txt}`
        }
    };
    // Добавляем обрабочик процесса загрузки
        xhr.onprogress = function(event) {
            // Выведем прогресс загрузки
            console.log(`Загружено ${event.loaded} из ${event.total}`)
        };

    // Добавляем обрабочик ошибки
    xhr.onerror = function() {
        // обработаем ошибку, не связанную с HTTP (например, нет соединения)
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    // Отправляем запрос
    xhr.send();

}

btn.addEventListener('click', () => {

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        status.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
})