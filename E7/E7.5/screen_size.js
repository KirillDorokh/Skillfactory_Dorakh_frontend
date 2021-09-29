if (window.matchMedia("(min-width: 400px)").matches) {
    // Эта часть выполнится, если ширина области просмотра >=400px
} else {
    // Эта часть выполнится, если ширина области просмотра < 400px
}

/* 	Размер экрана с учётом полосы прокрутки. Для этого используются свойства window.innerWidth и window.innerHeight.
*   Размер экрана без учёта полосы прокрутки. Тут можно использовать document.documentElement.clientWidth
*   и document.documentElement.clientHeight.
*   Размеры экрана девайса\монитора. Для этого используется Screen API и два свойства из списка этого
*   API: window.screen.width и window.screen.height.
*  */