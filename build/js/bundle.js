!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),document.addEventListener("DOMContentLoaded",(function(e){!function(){const e=document.querySelectorAll(".js-scroll-to");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}));let t=document.querySelector("a.btn__scroll");function n(e){let n=document.documentElement.scrollHeight-e;window.scrollY>100&&window.scrollY<n?t.classList.add("_visible"):t.classList.remove("_visible")}addEventListener("scroll",()=>{window.screen.width>860?n(1200):window.screen.width<860&&n(950)})}(),function(){let e=document.querySelectorAll(".tab--1 .item._hidden");const t=document.querySelector(".choise__btn_1");t.addEventListener("click",(function(){e.forEach((function(e){e.classList.toggle("_hidden")})),this.classList.toggle("_hide"),"Показать ещё"==this.innerHTML?this.innerHTML="Скрыть":this.innerHTML="Показать ещё",t.classList.contains("_hide")||t.scrollIntoView({block:"center",behavior:"auto"})}));let n=document.querySelectorAll(".tab--2 .item._hidden");const o=document.querySelector(".choise__btn_2");o.addEventListener("click",(function(){n.forEach((function(e){e.classList.toggle("_hidden")})),this.classList.toggle("_hide"),"Показать ещё"==this.innerHTML?this.innerHTML="Скрыть":this.innerHTML="Показать ещё",o.classList.contains("_hide")||o.scrollIntoView({block:"center",behavior:"auto"})}));let i=document.querySelectorAll(".work__content .item._hidden");const r=document.querySelector(".work__btn");r.addEventListener("click",(function(){i.forEach((function(e){e.classList.toggle("_hidden")})),this.classList.toggle("_hide"),"Показать ещё"==this.innerHTML?this.innerHTML="Скрыть":this.innerHTML="Показать ещё",r.classList.contains("_hide")||r.scrollIntoView({block:"center",behavior:"auto"})}))}(),function(){let e=document.querySelector(".reviews__slider .swiper-container");new Swiper(e,{slidesPerView:"auto",spaceBetween:23,navigation:{prevEl:e.nextElementSibling,nextEl:e.nextElementSibling.nextElementSibling},loop:!0,centeredSlides:!0,breakpoints:{769:{spaceBetween:43}}})}(),function(){const e=document.querySelectorAll(".accordion button");function t(){const t=this.getAttribute("aria-expanded");for(let t=0;t<e.length;t++)e[t].setAttribute("aria-expanded","false");"false"==t&&this.setAttribute("aria-expanded","true")}e.forEach(e=>e.addEventListener("click",t))}(),baguetteBox.run(".work__content",{noScrollbars:!0,async:!0}),baguetteBox.run(".logo__link",{noScrollbars:!0,async:!0}),baguetteBox.run(".review__link",{noScrollbars:!0,async:!0})}))}]);