'use strict';

const slider = function () {
  const slides = document.querySelectorAll('#slides');
  //   const sliider = document.querySelector('.all-styles');
  const btnright = document.querySelector('.slider__btn--right');

  let curslide = 0;
  const maxslide = slides.length;

  const gotoslide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `transalateX(${100 * (i - slide)}%)`)
    );
  };
  const nextslide = function () {
    if (curslide === maxslide - 1) {
      curslide = 0;
    } else {
      curslide++;
    }
    gotoslide(curslide);
  };
  const init = function () {
    gotoslide(0);
  };
  init();
  btnright.addEventListener('click', nextslide);
};

slider();
console.log('hello');
