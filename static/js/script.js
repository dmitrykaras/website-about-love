// Получаем элементы DOM
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const okBtn = document.getElementById('ok-btn');

const overlay1 = document.getElementById('overlay1');
const popup1 = document.getElementById('popup1');
const closeBtn1 = document.getElementById('close-btn1');
const okBtn1 = document.getElementById('ok-btn1');

const imageContainers = document.querySelectorAll('.image-container');
const hoverSound = document.getElementById('hover-sound');
const images = document.querySelectorAll('.image-container img');

// Функция для показа первого popup
function openPopup() {
    if (popup && overlay) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// Функция для скрытия первого popup
function closePopup() {
    if (popup && overlay) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Функция для показа второго popup
function showSecondPopup() {
    if (popup1 && overlay1) {
        popup1.style.display = 'block';
        overlay1.style.display = 'block';
    }
}

// Функция для скрытия второго popup
function hideSecondPopup() {
    if (popup1 && overlay1) {
        popup1.style.display = 'none';
        overlay1.style.display = 'none';
    }
}

// Добавляем обработчики событий на изображения
if (imageContainers) {
    imageContainers.forEach(container => {
        container.addEventListener('click', showSecondPopup);
    });
}

// Добавляем обработчики событий на кнопки закрытия и OK
if (closeBtn1 && okBtn1) {
    closeBtn1.addEventListener('click', hideSecondPopup);
    okBtn1.addEventListener('click', hideSecondPopup);
}

// Закрываем второй popup при клике на overlay
if (overlay1) {
    overlay1.addEventListener('click', hideSecondPopup);
}

// Закрываем первый popup при клике на overlay
if (overlay) {
    overlay.addEventListener('click', closePopup);
}

// Воспроизведение звука при наведении на изображения
if (images && hoverSound) {
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
}