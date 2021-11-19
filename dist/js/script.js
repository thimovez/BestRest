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
//Паралакс при скролле
let thesholdSets = [];
for (let i = 0; i <= 1.0; i += 0.005) {
    thesholdSets.push(i);
}
const callback = function (entries, observer) {
    const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
    setParallaxItemStyle(scrollTopProcent);
}
//Вообще валидацию лучше делать на бэкенде
const inputName = document.querySelector('.auth__name'),
    messageName = document.querySelector('.msg'),
    inputSecName = document.querySelector('.auth__second-name'),
    messageSecName = document.querySelector('.msg__secname'),
    listCountry = document.querySelector('.auth__select'),
    messageCountry = document.querySelector('.msg__country'),
    inputPhone = document.querySelector('.auth__phone'),
    messagePhone = document.querySelector('.msg__phone'),
    inputPassword = document.querySelector('.password'),
    messagePassword = document.querySelector('.msg__password'),
    inputConfirmPassword = document.querySelector('.confirm-passw'),
    messageConfirmPassword = document.querySelector('.confirm-passw');


//Проверка на к-во символов в инпуте First Name
function checkInputName() {
    inputName.addEventListener('keyup', function (e) {
        let length = this.value.length;
        // вывести текст под инпутом Name
        let timerName = setInterval(() => {
            (length <= 2) ?
                messageName.textContent = 'The name must be more than 2 characters'
                :
                messageSecName.style.display = 'none';
        }, 1000);
        // остановить вывод текста через 4 секунд
        setTimeout(() => { clearInterval(timerName); messageName.textContent = ''; }, 4000);
    });
}
//Проверка на к-во символов в инпуте Second Name
function checkInputSecondName() {
    inputSecName.addEventListener('keyup', function (e) {
        let length = this.value.length;
        // вывести текст под инпутом SecondName
        let timerSecName = setInterval(() => {
            (length <= 2) ?
                messageSecName.textContent = 'The name must be more than 2 characters'
                :
                messageSecName.style.display = 'none';
        }, 1000);
        // остановить вывод текста через 4 секунд
        setTimeout(() => { clearInterval(timerSecName); messageSecName.textContent = ''; }, 4000);
    });
}
//Проверка: Обязательно нужно заполнить поле Country
function countrySelect(country) {
    listCountry.addEventListener("click", () => {
        if (country.value === "Default") {
            messageCountry.textContent = 'Fill in the field';
        } else {
            messageCountry.style.display = 'none';
        }
    });
}
//Проверка: Обязательно нужно заполнить поле Phone
function phoneSelect() {
    inputPhone.addEventListener('keyup', function (e) {
        let length = this.value.length;
        console.log(length);
        // вывести текст под инпутом Phone
        let timerPhone = setInterval(() => {
            (length <= 1) ?
                messagePhone.textContent = 'Fill in the field'
                :
                messagePhone.style.display = 'none';
        }, 1000);
        // остановить вывод текста через 2 секунд
        setTimeout(() => { clearInterval(timerPhone); messagePhone.textContent = ''; }, 4000);
    });
}
///Проверка паролей
function allLetter(uname) {
    let strongPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%/()=¿?*+-])(?=(?:([\w\d])\1?(?!\1\1)))/;
    let timerPassword = inputPassword.addEventListener('keyup', () => {
        if (uname.value.match(strongPass)) {
            messagePassword.style.display = 'none';
        } else {
            messagePassword.textContent = 'Password must have 1 letter, 1 number and one symbol';
        }
    }, 1000);
    return setTimeout(() => { clearInterval(timerPassword); messagePassword.style.display = 'none'; }, 4000);
}
//Сравнение пароля
// function passwordСomparison() {
//     let timerConfirmPass = inputConfirmPassword.addEventListener('keyup', () => {
//         if (inputPassword === inputConfirmPassword) {
//             messageConfirmPassword.style.display = 'none';
//             console.log(отработало);
//         } else {
//             messageConfirmPassword.textContent = 'Password does not match';
//         }
//     }, 1000);
//     return setTimeout(() => { clearInterval(timerConfirmPass); messagePassword.style.display = 'none'; }, 4000);
// }


// Вызов функий на валидацию
checkInputName();
checkInputSecondName();
countrySelect(listCountry);
phoneSelect();
allLetter(inputPassword);
// passwordСomparison();