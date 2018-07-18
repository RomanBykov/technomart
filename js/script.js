'use strict';

var pageBody = document.querySelector('body');
var modalContacts = pageBody.querySelector('.modal-contacts');
var openContactsButton = pageBody.querySelector('.contacts-btn');
var buyButton = pageBody.querySelector('.popular-actions-buy');
var modalOrder = pageBody.querySelector('.modal-order');
var slideButtonActive = 'services-btn-active';
var slideActive = 'slide-active';
var elementActive = 'element-active';
var keyCodes = {
  ESC: 27,
  ENTER: 13,
  SPACE: 27
};

var changeSlide = function (slideButton, slideName) {
  slideButton.addEventListener('click', function() {
    resetSlider();
    slideButton.classList.add(slideButtonActive);
    slideName.classList.add(slideActive);
  })
};

var closeModal = function (item) {
  if (item.classList.contains(elementActive)) {
    item.classList.remove(elementActive);
  }
}

var closeExistModal = function() {
  if (pageBody.querySelector('.modal-contacts')) {
    closeModal(modalContacts);
  }
  if (pageBody.querySelector('.modal-map')) {
    closeModal(modalMap);
  }
}

if (pageBody.querySelector('.modal-map')) {
  var modalMap = pageBody.querySelector('.modal-map');
  var openMapButton = pageBody.querySelector('.map-btn');

  openMapButton.addEventListener('click', function() {
    modalMap.classList.add(elementActive);
  });
}

if (pageBody.querySelector('.services-slides')) {
  var servicesSlides = pageBody.querySelector('.services-slides');
  var slideButtonOne = servicesSlides.querySelector('#slide-1');
  var slideButtonTwo = servicesSlides.querySelector('#slide-2');
  var slideButtonThree = servicesSlides.querySelector('#slide-3');
  var servicesSlideOne = servicesSlides.querySelector('.services-slide-1');
  var servicesSlideTwo = servicesSlides.querySelector('.services-slide-2');
  var servicesSlideThree = servicesSlides.querySelector('.services-slide-3');
  var slideButtons = [slideButtonOne, slideButtonTwo, slideButtonThree];
  var slides = [servicesSlideOne, servicesSlideTwo, servicesSlideThree];

  var resetSlider = function () {
    slideButtons.forEach(function (button) {
      button.classList.remove(slideButtonActive);
    })
    slides.forEach(function (slide) {
      slide.classList.remove(slideActive);
    });
  };

  changeSlide(slideButtonOne, servicesSlideOne);
  changeSlide(slideButtonTwo, servicesSlideTwo);
  changeSlide(slideButtonThree, servicesSlideThree);
}

if (pageBody.querySelector('.modal-contacts')) {
  openContactsButton.addEventListener('click', function() {
    modalContacts.classList.add(elementActive);
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === keyCodes.ESC) {
      evt.preventDefault();
      closeModal(modalContacts);
    }
  });
}

buyButton.addEventListener('click', function () {
  modalOrder.classList.add(elementActive);
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === keyCodes.ESC) {
    evt.preventDefault();
    closeModal(modalOrder);
    if (pageBody.querySelector('.modal-map')) {
      closeModal(modalMap);
    }
  }
});

pageBody.addEventListener('click', function(evt) {
  var target = evt.target;
  if (target.classList.contains('popular-actions-buy')) {
    modalOrder.classList.add(elementActive);
  }
  if (target.classList.contains('close-btn')) {
    closeModal(modalOrder);
    closeExistModal();
  }
});
