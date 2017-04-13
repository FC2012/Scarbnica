function mOver(obj) {
    obj.style.background = "rgba(255,255,255,0.9)";
    obj.firstElementChild.style = "color:rgb(217, 170, 32)";
}

function mOut(obj) {
    obj.style.background = "rgba(51,1,2,0.8)";
    obj.firstElementChild.style = "color:rgba(255,255,255,0.9)";
}



function mOver1(obj1) {

    obj1.firstElementChild.style = "color:red; background:white";
}

function mOut1(obj1) {
    obj1.firstElementChild.style = "color:white; background:dimgrey";
}





















/*obj.style.background = "rgba(255,255,255,0.9)";
obj.style.color = "darkred";
obj.style.background = "rgba(51,1,2,0.8)";*/


// SLIDER

var slides = document.querySelectorAll('#slider-container .slider-element');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);

function nextSlide() {
    slides[currentSlide].className = 'slider-element';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider-element active';
}

