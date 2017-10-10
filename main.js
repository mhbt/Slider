//
// if(document.querySelector(".slider-container")) {
//   console.log("slider-enabled");
//   var slider_translate_now = 0;
//   var slider = document.querySelector("#sliderFruit");
//   var controlLeft = document.querySelector("#sliderFruit .slider-control-left button");
//   var controlRight = document.querySelector("#sliderFruit .slider-control-right button");
//   var slide_content = document.querySelectorAll("#sliderFruit .slider-content");
//   var slide_container = slide_content[0].parentNode;
//   var slide_content_width = slide_content[0].offsetWidth;
//   var slide_container_width = slide_content_width * slide_content.length;
//   var max_translate = slide_container_width - slider.querySelector(".slider-content-space").offsetWidth;
//   console.log(`${slide_container_width.toString()}px`);
//   slide_container.style.width = slide_container_width.toString() + "px";
//   controlLeft.addEventListener('click',slideLeft, true);
//   controlRight.addEventListener('click',slideRight, true);
//   if (slider_translate_now >= 0) {
//     controlLeft.setAttribute("disabled", "true");
//     controlLeft.classList.add("hidden");
//   }
//   // console.log(controlRight);
// }
//
// function slideLeft(e){
//   e.preventDefault();
//   slider_translate_now += calculatetranslate(slider);
//   console.log("left" + slider_translate_now);
//   controlRight.removeAttribute("disabled", "true");
//   controlRight.classList.remove("hidden");
//   if (slider_translate_now >= 0) {
//     slider_translate_now = 0;
//     controlLeft.setAttribute("disabled", "true");
//     controlLeft.classList.add("hidden");
//   } else {
//     controlLeft.removeAttribute("disabled", "true");
//     controlLeft.classList.remove("hidden");
//   }
//   // slider.querySelector(".slider-content-container");
//   slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider_translate_now}px,0,0)`;
// }
// function slideRight(e){
//   e.preventDefault();
//   let slider = e.target.parentNode.parentNode.parentNode.parentNode;
//   controlLeft.removeAttribute("disabled", "true");
//   controlLeft.classList.remove("hidden");
//   slider_translate_now -= calculatetranslate(slider);
//   if (slider_translate_now <= -max_translate) {
//     slider_translate_now = -max_translate;
//     controlRight.setAttribute("disabled", "true");
//     controlRight.classList.add("hidden");
//   } else {
//     controlRight.removeAttribute("disabled", "true");
//     controlRight.classList.remove("hidden");
//   }
//   console.log("right" + slider_translate_now);
//   slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider_translate_now}px,0,0)`;
// }
//
// function calculatetranslate(slider) {
//   let slider_space = slider.querySelector(".slider-content-space");
//   return slider_space.offsetWidth;
// }
