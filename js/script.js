'use strict';

(function () {
  const carousel = document.querySelector('.slider__items'),
    content = document.querySelector('.slider__list'),
    buttonRight = document.querySelector('.slider__button--right'),
    buttonLeft = document.querySelector('.slider__button--left');

  // Значение в счетчике
  const sliderItems = document.querySelectorAll('.slider__item'),
    currentItem = document.querySelector('.slider__number-slides'),
    quantitySlides = document.querySelector('.slider__quantity-slides');

  const maxValueCounter = sliderItems.length;
  const gap = 437; // ширина превью + отступ справа 

  let width = carousel.offsetWidth;
  let currentSlider = 1;

  quantitySlides.textContent = sliderItems.length;

  buttonRight.addEventListener('click', () => {
    carousel.scrollBy(gap, 0);
    if (currentSlider < maxValueCounter) {
      currentItem.textContent = ++currentSlider;
    }

    if (carousel.scrollWidth !== 0) {
      buttonLeft.style.opacity = 1;
    }
    if (content.scrollWidth - gap <= carousel.scrollLeft + width) {
      buttonRight.style.opacity = 0.5;
    }
  });

  buttonLeft.addEventListener('click', () => {
    carousel.scrollBy(-(gap), 0);
    
    if (currentSlider > 1) {
      currentItem.textContent = --currentSlider;
    }

    if (carousel.scrollLeft - gap <= 0) {
      buttonLeft.style.opacity = 0.5;
    }
    if (!content.scrollWidth - gap <= carousel.scrollLeft + width) {
      buttonRight.style.opacity = 1;
    }
  });
})();
