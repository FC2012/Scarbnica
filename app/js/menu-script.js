function mOver(obj) {
    obj.style.background = "rgba(255,255,255,0.9)";
    obj.firstElementChild.style = "color:rgb(217, 170, 32)";
}

function mOut(obj) {
    obj.style.background = "rgba(51,1,2,0.8)";
    obj.firstElementChild.style = "color:rgba(255,255,255,0.9)";
}


/*obj.style.background = "rgba(255,255,255,0.9)";
obj.style.color = "darkred";
obj.style.background = "rgba(51,1,2,0.8)";*/


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}