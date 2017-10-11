if (document.querySelector(".slider-container")) {
  var sliderList = {
  };
  { let sliders = document.querySelectorAll(".slider-container");
    sliders.forEach(function ( slider ){
      console.log(`${slider.id} is enabled`);
      sliderList[`${slider.id}`] =  document.querySelector(`#${slider.id}`);
      sliderList[`${slider.id}`].now = 0;
      sliderList[`${slider.id}`].controlLeft = sliderList[`${slider.id}`].querySelector(".slider-control-left button");
      sliderList[`${slider.id}`].controlRight = sliderList[`${slider.id}`].querySelector(".slider-control-right button");
      sliderList[`${slider.id}`].slide_content = sliderList[`${slider.id}`].querySelectorAll(".slider-content");
      sliderList[`${slider.id}`].slide_container = sliderList[`${slider.id}`].slide_content[0].parentNode;
      sliderList[`${slider.id}`].content_space = sliderList[`${slider.id}`].querySelector(".slider-content-space");
      if (sliderList[`${slider.id}`].now >= 0 ){
        sliderList[`${slider.id}`].controlLeft.classList.add("hidden");
      }
      //left
      sliderList[`${slider.id}`].controlLeft.addEventListener("click",(e)=> {
          e.preventDefault();
          let max_translate = get_max_translate(slider.slide_content,slider.content_space);
          if (slider.now == 0 - max_translate) slider.now = slider.now_memory;
          slider.now += calculateTranslate(slider);
          slider.controlRight.classList.remove("hidden");
          if (slider.now >= 0) {
            slider.now = 0;
            slider.controlLeft.classList.add("hidden");
            slider.querySelector(".opacity-end").style.cssText = null;
          } else {
            slider.controlLeft.classList.remove("hidden");
            slider.querySelector(".opacity-end").style.cssText = null;
          }
          slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider.now}px,0,0)`;
      }, true);
      //right
      sliderList[`${slider.id}`].controlRight.addEventListener("click", e => {
        e.preventDefault();
        slider.controlLeft.removeAttribute("disabled", "true");
        slider.controlLeft.classList.remove("hidden");
        slider.now -= calculateTranslate(slider);
        max_translate = get_max_translate(sliderList[`${slider.id}`].slide_content,sliderList[`${slider.id}`].content_space);
        // console.log(max_translate);
        if (slider.now <= 0- max_translate) {
          slider.now_memory = slider.now;
          slider.now = -max_translate;
          slider.controlRight.classList.add("hidden");
          slider.querySelector(".opacity-end").style.left = 0;
        } else {
          slider.controlRight.classList.remove("hidden");
        }
        slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider.now}px,0,0)`;
      }, true);
        slider.querySelector(".slider-content-space").addEventListener("touchstart", (e)=>{
          slider.touchstart = e.touches[0].clientX;
        }, false);
        slider.querySelector(".slider-content-space").addEventListener("touchmove", (e)=>{
          slider.touchend = e.touches[0].clientX;
        }, false);
        slider.querySelector(".slider-content-space").addEventListener("touchend", (e)=>{
          console.log(slider.touchend - slider.touchstart);
          console.log(slider.now + " " + slider.now_memory);
          if (slider.touchend > slider.touchstart) {
            if (slider.now != 0 ) slider.controlLeft.click();
          } else {
            if (slider.now != slider.now_memory) slider.controlRight.click();
          }
        }, false);
    });

  } //End Let Sliders Block
} //EndIF Slider
function get_slide_content_width(content) {
  return content.offsetWidth;
}
function get_slide_container_width(contents) {
  return get_slide_content_width(contents[0]) * contents.length;
}
function get_max_translate(container, slider_content_space) {
  return get_slide_container_width(container) - slider_content_space.offsetWidth;
}
function calculateTranslate(slider){
  if (window.outerWidth >= 1320) {
      return slider.slide_content[0].offsetWidth * 6;
  }
  else if (window.outerWidth >= 1200) {
    return slider.slide_content[0].offsetWidth * 5;
  }
  else if (window.outerWidth >= 992) {
    return slider.slide_content[0].offsetWidth * 5;
  }
  else if (window.outerWidth >= 852) {
    return slider.slide_content[0].offsetWidth * 4;
  }
  else if (window.outerWidth >= 769) {
    return slider.slide_content[0].offsetWidth * 3;
  }
  else {
    return slider.slide_content[0].offsetWidth * 2;
  }
  console.log(slider.slide_content[0].offsetWidth);
}
