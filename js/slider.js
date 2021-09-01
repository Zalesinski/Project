const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: ".swiper-pagination",
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

