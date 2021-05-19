$(document).ready(function() {
    $('.header__burger').on("click", function(click) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    slidesPerView: 3,

    spaceBetween: 50,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        
    },
    speed: 600,

    breakpoints: {
      960: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }

  });