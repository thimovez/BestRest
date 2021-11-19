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

const inputName = document.querySelector('.auth__name'),
    messageName = document.querySelector('.msg'),
    inputSecName = document.querySelector('.auth__second-name'),
    messageSecName = document.querySelector('.msg__secname'),
    inputCountry = document.querySelector('.auth__coutry'),
    messageCountry = document.querySelector('.msg__country');


//Проверка на к-во символов в инпуте First Name
function checkInputName() {
    inputName.addEventListener('keyup', function (e) {
        let length = this.value.length;
        // вывести текст под инпутом Name
        let timerName = setInterval(() => {
            (length < 3) ?
                messageName.textContent = 'The name must be more than 2 characters'
                :
                messageName.textContent = '';
        }, 1000);
        // остановить вывод текста через 4 секунд
        return setTimeout(() => { clearInterval(timerName); messageValue.textContent = ''; }, 4000);
    });
}
//Проверка на к-во символов в инпуте Second Name
function checkInputSecondName() {
    inputSecName.addEventListener('keyup', function (e) {
        let length = this.value.length;
        // вывести текст под инпутом SecondName
        let timerSecName = setInterval(() => {
            (length < 3) ?
                messageSecName.textContent = 'The name must be more than 2 characters'
                :
                messageSecName.textContent = '';
        }, 1000);
        // остановить вывод текста через 4 секунд
        return setTimeout(() => { clearInterval(timerSecName); messageSecName.textContent = ''; }, 4000);
    });
}


// inputCountry.addEventListener('keyup', function (e) {
//     let length = this.value.length;
//     // вывести текст под инпутом Country
//     console.log(length);
//     let timerCountry = setInterval(() => {
//         console.log(length);
//         (length < 1) ?
//             // messageCountry.textContent = 'Fill in the field'
//             console.log('working')
//             :
//             messageCountry.textContent = '';
//     }, 1000);
//     // остановить вывод текста через 4 секунд
//     return setTimeout(() => { clearInterval(timerCountry); messageCountry.textContent = ''; }, 4000);
// });

// let a = document.forms["myForm"]["country"].value;
// function validate() {

//     let timerCountry = setInterval(() => {
//         if (a == "" || 0) {
//             messageCountry.textContent = 'Fill in the field'
//         } else if (a == " ") {
//             messageCountry.textContent = '';
//         }
//         return false;
//     }, 1000);
// }

// validate();


// Вызов основных функций 
checkInputName();
checkInputSecondName()