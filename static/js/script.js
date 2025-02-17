document.addEventListener('DOMContentLoaded', function() {
    //уведомление при нажатии на кнопку в /login
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    function showPopup() {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    }

    function hidePopup() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }

    overlay.addEventListener('click', hidePopup);
});

document.addEventListener('DOMContentLoaded', function() {
    //уведомление при нажатии на изображение 
    const imageContainers = document.querySelectorAll('.image-container');
    const overlay1 = document.getElementById('overlay1');
    const popup1 = document.getElementById('popup1');
    const closeBtn1 = document.getElementById('close-btn1');
    const okBtn1 = document.getElementById('ok-btn1');


    function showPopup1() {
        overlay1.style.display = 'block';
        popup1.style.display = 'block';
    }

    function hidePopup1() {
        overlay1.style.display = 'none';
        popup1.style.display = 'none';
    }

    imageContainers.forEach(container => {
        container.addEventListener('click', showPopup1);
    });

    closeBtn1.addEventListener('click', hidePopup1);
    okBtn1.addEventListener('click', hidePopup1);
    overlay1.addEventListener('click', hidePopup1);
});