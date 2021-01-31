document.addEventListener("DOMContentLoaded", function () {
  const mainVisual = new mainVisualSlider();
});

class mainVisualSlider {
  constructor() {
    this.swiper = new Swiper(".main-visual-swiper-container", {
      // Optional parameters
      effect:'fade',
    //   centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }
}
