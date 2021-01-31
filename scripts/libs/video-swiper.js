document.addEventListener("DOMContentLoaded", function () {
  const video = new videoSlider();
});

class videoSlider {
  constructor() {
    this.swiper = new Swiper(".video-swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
	  // Optional parameters
	  loop: true,
      effect: 'fade',
      spaceBetween: 50,
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          autoplay: {
            delay: 5000000,
          }
        }
      },
    });
  }
}
