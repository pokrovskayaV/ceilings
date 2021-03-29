export default function sliderInit() {
  let reviewslider = document.querySelector(
    ".reviews__slider .swiper-container"
  );
  new Swiper(reviewslider, {
    slidesPerView: "auto",
    spaceBetween: 23,
    navigation: {
      prevEl: reviewslider.nextElementSibling,
      nextEl: reviewslider.nextElementSibling.nextElementSibling,
    },
    loop: true,
    centeredSlides: true,
    breakpoints: {
      769: {
        spaceBetween: 43,
      },
    },
  });
}
