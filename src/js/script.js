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
//WOW js
new WOW().init();
//Переменные для валидации
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
    messageConfirmPassword = document.querySelector('.msg__confirm-pasw'),
    inputEmail = document.querySelector('.email'),
    messageEmail = document.querySelector('.msg__email'),
    onSubmitForm = document.querySelector('.onsubmit');


//Проверка на к-во символов в инпуте First Name
function verifyInputName() {
    inputName.addEventListener('keyup', function (e) {
        let length = this.value.length;
        // Вывести текст под инпутом Name
        let timerName = setInterval(() => {
            if (length <= 2) {
                messageName.style.display = 'block'
                if (!length) {
                    messageName.style.display = 'none';
                }
            } else {
                messageName.style.display = 'none';
            }
            setTimeout(() => {
                messageName.style.display = 'none';
            }, 4000);
        });
        setTimeout(() => { clearInterval(timerName); });
    });
}
//Проверка на к-во символов в инпуте Second Name
function verifyInputSecondName() {
    inputSecName.addEventListener('keyup', function (e) {
        let length = this.value.length;
        // вывести текст под инпутом SecondName
        let timerSecName = setInterval(() => {
            if (length <= 2) {
                messageSecName.style.display = 'block';
                if (!length) {
                    messageSecName.style.display = 'none';
                }
            } else {
                messageSecName.style.display = 'none';
            }
            setTimeout(() => {
                messageSecName.style.display = 'none';
            }, 4000);
        });
        // остановить вывод текста
        setTimeout(() => { clearInterval(timerSecName); });
    });
}
//Проверка: Обязательно нужно заполнить поле Country
function countrySelect(country) {
    listCountry.addEventListener("click", () => {
        timerCountry = setInterval(() => {
            if (country.value === "Default") {
                messageCountry.style.display = 'block';
                if (!country.value) {
                    messageCountry.style.display = 'block';
                }
            } else {
                messageCountry.style.display = 'none';
            }
            setTimeout(() => {
                messageCountry.style.display = 'none';
            }, 4000);
        });
        //остановить вывод ошибки
        setTimeout(() => { clearInterval(timerCountry); });
    });
}
//Проверка: Обязательно нужно заполнить поле Phone
function phoneInput() {
    inputPhone.addEventListener('keyup', function (e) {
        let length = this.value.length;
        let onlyNum = /^\d+$/;
        // вывести текст под инпутом Phone
        let timerPhone = setInterval(() => {
            if (length <= 3) {
                messagePhone.style.display = 'block';
                if (!onlyNum) {
                    messagePhone.style.display = 'block';
                }
            } else {
                messagePhone.style.display = 'none';
            }
        }, 1000);
        // остановить вывод текста
        setTimeout(() => { clearInterval(timerPhone); messagePhone.style.display = 'none'; }, 4000);
    });
}
//Проверка основного пароля
function verifyPassword() {
    inputPassword.addEventListener('keyup', function (e) {
        let keyLetter = e.target.value;
        // console.log(keyLetter);
        let strongPass = new RegExp("[A-Za-z][^0-9][0-9]");
        // console.log(strongPass.test(keyLetter));
        let timerPassword = setInterval(() => {
            if (strongPass.test(keyLetter) === false) {
                messagePassword.style.display = 'block'
            } else {
                messagePassword.style.display = 'none'
            }
            setTimeout(() => {
                messagePassword.style.display = 'none';
            }, 4000);
        });
        setTimeout(() => { clearInterval(timerPassword); });
    });
}
//Сравнение паролей
function passwordСomparison() {
    inputConfirmPassword.addEventListener('keyup', function (e) {
        let keyLetter = e.target.value;
        let checkpass = inputPassword.value;
        console.log(checkpass);
        timerConfPass = setInterval(() => {
            if (keyLetter === inputPassword) {
                // messageConfirmPassword.style.display = 'none';
                console.log('ok!!')
            } else {
                messageConfirmPassword.style.display = 'block';
            }
            setTimeout(() => {
                messageConfirmPassword.style.display = 'none';
            }, 4000);
        });
        setTimeout(() => { clearInterval(timerConfPass); });
    });

}
//Проверка email
function verifyEmail() {
    inputEmail.addEventListener('keyup', function (e) {
        let keyLetter = e.target.value;
        console.log(keyLetter);
        let correctEmail = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        console.log(correctEmail.test(keyLetter));
        let timerEmail = setInterval(() => {
            if (correctEmail.test(keyLetter) === false) {
                messageEmail.style.display = 'block'
            } else {
                messageEmail.style.display = 'none'
            }
            setTimeout(() => {
                messageEmail.style.display = 'none';
            }, 4000);
        });
        setTimeout(() => { clearInterval(timerEmail); });
    });
}
// Проверка инпутов при нажатии на Sing Up
function formValidation() {
    onSubmitForm.addEventListener('click', () => {
        if (verifyInputName() === true) {
            messageName.style.display = 'none';
        } else {
            messageName.style.display = 'block';
        }
        return false;
    });
}

// Вызов функий на валидацию
verifyInputName();
verifyInputSecondName();
countrySelect(listCountry);
phoneInput();
verifyPassword();
passwordСomparison();
verifyEmail();
formValidation();