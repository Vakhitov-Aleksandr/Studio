$(document).ready(function () {
  $('.main-slider .slides').slick({
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1000
  });

  $('.reviews-slider').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000
  });
});

// Плавный скрол якорных ссылок :
const anchors = document.querySelectorAll('a._anchor');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// Toggle Menu
let menu = document.querySelector('.menu');
let btnMenu = document.querySelector('.burger');
btnMenu.addEventListener('click', function(){
  menu.classList.toggle('toggle');
  btnMenu.classList.toggle('active');
  if(btnMenu.classList.contains('active')){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
})
