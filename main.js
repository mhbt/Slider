
if(document.querySelector(".slider-container")) {
  console.log("slider-enabled");
  var slider = document.querySelector("#slider-fruit");
  var controlLeft = document.querySelector("#slider-fruit .slider-control-left a");
  var controlRight = document.querySelector("#slider-fruit .slider-control-right a");
  controlLeft.addEventListener('click',slideLeft, true);
  controlRight.addEventListener('click',slideRight, true);
  // console.log(controlRight);
}

function slideLeft(e){
  e.preventDefault();
  let slider = e.target.parentNode.parentNode.parentNode.parentNode;
  // slider.querySelector(".slider-content-container").classList.add('translate');

  slider.querySelector(".slider-content-container").style.transform = "translate3d(-900px,0,0)";
  // console.log("left");
}
function slideRight(e){
  e.preventDefault();
  console.log("right");

}

function calculatetranslate
