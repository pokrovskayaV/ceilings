export default function scroll () {
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

let btnTop = document.querySelector('a.btn__scroll');
 addEventListener('scroll', () => {
   if(window.screen.width > 860) {
    btnScroll(1200);
   } else if (window.screen.width < 860) {
    btnScroll(950);
   }
    
  })
  function btnScroll (add) {
  let hieght =  document.documentElement.scrollHeight;  
  let btnHieght = hieght - add;
    if(window.scrollY > 100 && window.scrollY < btnHieght) {
    btnTop.classList.add('_visible');
  } else {
    btnTop.classList.remove('_visible');
  }
  }
}
