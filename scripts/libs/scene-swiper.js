document.addEventListener("DOMContentLoaded", function () {
  const scene = new sceneSlider();
});

class sceneSlider {
  constructor() {
    this.swiper = new Swiper(".scene-swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Optional parameters
      effect:'fade',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      grabCursor:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
       // breakpoints: {
      //   600: {
      //     // slidesPerView: 1.5,
      //     spaceBetween: 100,
      //   },
      //   960: {
      //     // slidesPerView: 1,
      //     spaceBetween: 100,
      //   },
      // },
    });
  }
}
