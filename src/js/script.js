const spanHide = document.querySelector('.hide'),
    inputClick = document.querySelector('.auth__input');

function hideInput() {
    inputClick.onclick('focus', () => {
        spanHide.style.display = 'block';
        console.log('Error')
    });
}
hideInput();

// console.log(inputCount)
// function allFunc() {

//     if (inputCount === '' || 0) {
//         spanHide.hidden = true;
//     } else {
//         spanHide.hidden = false;
//     }
// }
// function hideInput() {
//     document.onclick('click', () => {
//         spanHide.style.display = '';
//     });
// }

// hideInput();

// allFunc();

// Плавный скрол при нажатии на кнопку Registration
$('.flowing-scroll').on('click', function () {
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 700 // скорость прокрутки
        );
    }
    return false;
});
