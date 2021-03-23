document.addEventListener("DOMContentLoaded", function(event) { 
  let choiseItems3 = document.querySelectorAll('.work__content .item._hidden');
  const choiseBtn3 = document.querySelector('.work__btn');

  function handler3() {
    choiseItems3.forEach(function(item) {
      item.classList.toggle('_hidden');
    });
    this.classList.toggle('_hide');
    this.innerHTML=="Показать ещё" ? this.innerHTML="Скрыть" : this.innerHTML="Показать ещё";
    if(!choiseBtn3.classList.contains('_hide')) {
      choiseBtn3.scrollIntoView({block: "center", behavior: "auto"});
     }
  }
  choiseBtn3.addEventListener('click',handler3)

  let reviewslider = document.querySelector('.reviews__slider .swiper-container');
  new Swiper(reviewslider, {
    slidesPerView: 'auto',
    spaceBetween: 23,
    navigation: {
      prevEl: reviewslider.nextElementSibling,
      nextEl: reviewslider.nextElementSibling.nextElementSibling,
    },
    loop:true,
    centeredSlides: true,
    breakpoints: {
      769: {
        spaceBetween: 43,
      },
    }
  });

  const anchors = document.querySelectorAll('.js-scroll-to');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
 }
  
  baguetteBox.run('.work__content', {
    noScrollbars:true,
    async: true,
  });
  baguetteBox.run('.review__link', {
    noScrollbars:true,
    async: true,
  });
});