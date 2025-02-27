//уведомление при нажатии на кнопку в /login
function showPopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function hidePopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
    overlay.addEventListener('click', hidePopup);
    }
});

//уведомление при нажатии на изображение 
document.addEventListener('DOMContentLoaded', function() { 
    const imageContainers = document.querySelectorAll('.image-container');
    const overlay1 = document.getElementById('overlay1');
    const popup1 = document.getElementById('popup1');
    const closeBtn1 = document.getElementById('close-btn1');
    const okBtn1 = document.getElementById('ok-btn1');
    const okBtn3 = document.getElementById('ok-btn3');
    const okBtn2 = document.getElementById('ok-btn2');
    


    function showPopup1() {
        overlay1.style.display = 'block';
        popup1.style.display = 'block';
    }

    function hidePopup1() {
        overlay1.style.display = 'none';
        popup1.style.display = 'none';
    }

    if (okBtn2) {
        okBtn2.addEventListener('click', function() {
            window.location.href = '/love_general_1';
        });
    }

    if (okBtn3) {
        okBtn3.addEventListener('click', function() {
            window.location.href = '/love_general_7';
        });
    }

    imageContainers.forEach(container => {
        container.addEventListener('click', showPopup1);
    });

    if (closeBtn1) {
    closeBtn1.addEventListener('click', hidePopup1);
    }
    if (closeBtn1) {
    okBtn1.addEventListener('click', hidePopup1);
    }
    if (closeBtn1) {
    overlay1.addEventListener('click', hidePopup1);
    }
});

//звук при наведении на изображения
document.addEventListener('DOMContentLoaded', function() {
    const hoverSound = document.getElementById('hover-sound');
    const images = document.querySelectorAll('.image-container img, .image-container-tog img');
    

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const soundFile = image.getAttribute('data-sound');
            if (soundFile) {
                hoverSound.pause();
                hoverSound.currentTime = 0;
                hoverSound.src = soundFile;
                hoverSound.play();
            }
        });
    });
});

//убегающая кнопка
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('movingButton');

    button.addEventListener('mouseover', function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Ограничение перемещения, чтобы кнопка не выходила за пределы экрана
    const maxLeft = windowWidth - buttonWidth;
    const maxTop = windowHeight - buttonHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
    });

    // Инициализация начальной позиции кнопки
    window.onload = function() {
        button.style.left = '1120px';
        button.style.top = '840px';
    };
    button.addEventListener('click', function() {
        window.location.href = '/punishment';
    });
});

//счётчик дней от дня когда мы встретились
document.addEventListener('DOMContentLoaded', function() {
const meetingDate = new Date('2024-11-14');

function updateCounter() {
    const currentDate = new Date();
    const timeDifference = currentDate - meetingDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days-counter').textContent = 
        `${days} дня ${hours} часов ${minutes} минут ${seconds} секунд`;
}

updateCounter();

setInterval(updateCounter, 1000);
});

//субтитры
document.addEventListener('DOMContentLoaded', function() {
const subtitles = document.getElementById('subtitles');
const texts = [
    "Я поздравлю тебя с днём рождения!!!",
    "Ты самая лучшая и самая самая девочка на свете ❤️",
    " Желаю тебе здоровья, счастья и достижение всех целей!",
    "Любви не желаю тк я сам займусь этим вопросом)",
    "Люблю тебя! Ты лучшая ❤️"
];

let currentIndex = 0;
let isTyping = false;

function typeText(text, element, delay = 100) {
    isTyping = true;
    let index = 0;
    element.textContent = "";

    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
            isTyping = false;
        }
    }, delay);
}

function changeSubtitles() {
    if (isTyping) return;

    if (currentIndex < texts.length - 1) { 
        currentIndex++;
        typeText(texts[currentIndex], subtitles);
    } else {
        console.log("Субтитры закончились.");
    }
}

document.addEventListener('click', (event) => {
    changeSubtitles();
});

typeText(texts[currentIndex], subtitles);
});

//переключение изображений
document.addEventListener('DOMContentLoaded', function() {
// Массив с путями к изображениям
const images = [
    "static/images/subtitles/image1.png",
    "static/images/subtitles/image2.png",
    "static/images/subtitles/image3.png",
    "static/images/subtitles/image4.png",
    "static/images/subtitles/image5.png"
];

// Массив с подсказками для каждого изображения
const tooltips = [
    "1",
    "2",
    "3",
    "4",
    "5"
];

let currentIndex = 0; // Текущий индекс изображения

// Функция для смены изображения
function changeImage() {
    const imageElement = document.getElementById('iii');
    const tooltip = document.querySelector('.image-container .image-tooltip');

    // Меняем изображение и подсказку
    imageElement.src = images[currentIndex];
    tooltip.textContent = tooltips[currentIndex];

    // Переходим к следующему изображению
    currentIndex = (currentIndex + 1) % images.length;
}

// Добавляем обработчик события для всей страницы
document.addEventListener('click', changeImage);
});

document.addEventListener('DOMContentLoaded', function() {
// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем изображение и вставляем его внутрь модального окна
var img = document.querySelector('.open-modal');
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() { 
    modal.style.display = "none";
}

// Закрываем модальное окно, если пользователь кликает вне изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('click', changeImage);
});