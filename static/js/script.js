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