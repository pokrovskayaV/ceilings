import scroll from "./parts/scroll";
import hideItems from "./parts/hideItems";
import sliderInit from "./parts/sliderInit";
import baguetteInit from "./parts/baguetteInit";
import accordion from "./parts/accordion";

document.addEventListener("DOMContentLoaded", function(event) { 
  scroll();
  hideItems();
  sliderInit();
  accordion(); 
  baguetteInit();
});