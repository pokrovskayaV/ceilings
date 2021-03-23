export default function hideItems() {
  //1Таб
  let choiseItems1 = document.querySelectorAll('.tab--1 .item._hidden');
  const choiseBtn1 = document.querySelector('.choise__btn_1');

  function handler1() {
    choiseItems1.forEach(function(item) {
      item.classList.toggle('_hidden');
    });
    this.classList.toggle('_hide');
    this.innerHTML=="Показать ещё" ? this.innerHTML="Скрыть" : this.innerHTML="Показать ещё";
    if(!choiseBtn1.classList.contains('_hide')) {
      choiseBtn1.scrollIntoView({block: "center", behavior: "auto"});
     }
  }
  choiseBtn1.addEventListener('click',handler1)

  //2Таб
  let choiseItems2 = document.querySelectorAll('.tab--2 .item._hidden');
  const choiseBtn2 = document.querySelector('.choise__btn_2');

  function handler2() {
    choiseItems2.forEach(function(item) {
      item.classList.toggle('_hidden');
    });
    this.classList.toggle('_hide');
    this.innerHTML=="Показать ещё" ? this.innerHTML="Скрыть" : this.innerHTML="Показать ещё";
    
    if(!choiseBtn2.classList.contains('_hide')) {
    choiseBtn2.scrollIntoView({block: "center", behavior: "auto"});
   }
  }
  choiseBtn2.addEventListener('click',handler2);



  //Работы
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
}