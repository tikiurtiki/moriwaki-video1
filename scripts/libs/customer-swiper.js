document.addEventListener("DOMContentLoaded", function () {
  const customer = new customerSlider();
});

class customerSlider {
  constructor() {
    this.swiper = new Swiper(".customer-swiper-container", {
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
      spaceBetween: 30,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          autoplay: {
            delay: 5000000,
          }
        },
      },
    });
  }
}
