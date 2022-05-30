// Source: https://codepen.io/vhanla/pen/PxjZvj
// Code for fullscreen effect
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');
        item.style.zIndex = "1000";      
    });
});