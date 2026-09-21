const images=["pic1.jpg","pic2.jpg","pic3.png","pic4.jpg"];
let current=0;

const sliderimg=document.getElementById("slider-img");

function showslide(index)
{
    sliderimg.src=[index];
}

function nextSlide()
{
    current=(current+1)%images.length;
    showslide(current);
}
function prevSlide()
{
    current=(current-1+images.length)%images.length;
    showslide(current);
}

setInterval(nextSlide,3000);