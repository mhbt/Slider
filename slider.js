<<<<<<< current
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
      // slider.slide_container.style.width = get_slide_container_width(slider.slide_content)+ "px";
      //left
      sliderList[`${slider.id}`].controlLeft.addEventListener("click",(e)=> {
          e.preventDefault();
          slider.now += calculateTranslate(slider.content_space);
          console.log(slider.now);
          slider.controlRight.classList.remove("hidden");
          if (slider.now >= 0) {
            slider.now = 0;
            slider.controlLeft.classList.add("hidden");
          } else {
            slider.controlLeft.classList.remove("hidden");
          }
          slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider.now}px,0,0)`;
      }, true);
      //right
      sliderList[`${slider.id}`].controlRight.addEventListener("click", e => {
        e.preventDefault();
        slider.controlLeft.removeAttribute("disabled", "true");
        slider.controlLeft.classList.remove("hidden");
        slider.now -= calculateTranslate(slider.content_space);
        max_translate = get_max_translate(sliderList[`${slider.id}`].slide_content,sliderList[`${slider.id}`].content_space);
        // console.log(max_translate);
        if (slider.now <= 0- max_translate) {
          slider.now = -max_translate;
          slider.controlRight.classList.add("hidden");
        } else {
          slider.controlRight.classList.remove("hidden");
        }
        slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider.now}px,0,0)`;
      }, true);
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
function calculateTranslate(slider_space){

  return slider_space.offsetWidth;
}
// get_max_translate(sliderList[`${slider.id}`].slide_content,sliderList[`${slider.id}`].content_space);
=======
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
      // slider.slide_container.style.width = get_slide_container_width(slider.slide_content)+ "px";
      //left
      sliderList[`${slider.id}`].controlLeft.addEventListener("click",(e)=> {
          e.preventDefault();
          slider.now += calculateTranslate(slider.content_space);
          console.log(slider.now);
          slider.controlRight.classList.remove("hidden");
          if (slider.now >= 0) {
            slider.now = 0;
            slider.controlLeft.classList.add("hidden");
          } else {
            slider.controlLeft.classList.remove("hidden");
          }
          slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider.now}px,0,0)`;
      }, true);
      //right
      sliderList[`${slider.id}`].controlRight.addEventListener("click", e => {
        e.preventDefault();
        slider.controlLeft.removeAttribute("disabled", "true");
        slider.controlLeft.classList.remove("hidden");
        slider.now -= calculateTranslate(slider.content_space);
        let max_translate = get_max_translate(sliderList[`${slider.id}`].slide_content,sliderList[`${slider.id}`].content_space);
        // console.log(max_translate);
        if (slider.now <= 0- max_translate) {
          var temp_now = slider.now;
          slider.now = -max_translate;
          slider.controlRight.classList.add("hidden");
        } else {
          slider.controlRight.classList.remove("hidden");
        }
        slider.querySelector(".slider-content-container").style.transform = `translate3d(${slider.now}px,0,0)`;
      }, true);
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
function calculateTranslate(slider_space){
  console.log(slider_space.offsetWidth);
  return slider_space.offsetWidth;
}
// get_max_translate(sliderList[`${slider.id}`].slide_content,sliderList[`${slider.id}`].content_space);
>>>>>>> before discard
