'use strict';

// mobile-menu

// вытащить лого на передний план - навесить .nav__logo-mobile на .nav__logo
// навесить .active на .mobile-menu
// навесить на .burger-menu .close-toggle
// запретить взаимодействие с сайтом - на .mobile-container навесить .mobile-container__disable-bg
// запретить скролл - на <body> навесить .scroll-stop

let burgerMenu = document.querySelector('.burger-menu')
let navLogo = document.querySelector('.nav__logo');
let mobileMenu = document.querySelector('.mobile-menu');
let burgerToggle = document.querySelector('.burger-toggle');
let mobileContainer = document.querySelector('.mobile-container');
// let mobileScroll = document.querySelector('.mobile-scroll'); //вариант 2 с навешиванием предварительно на body спец.класса для упрощения (<body class="mobile-scroll">)
let scrollStop = document.getElementsByTagName('body');

let mobileItemClose = document.querySelectorAll('.mobile__item');

burgerMenu.addEventListener('click', function() {
  navLogo.classList.toggle('nav__logo-mobile');
  mobileMenu.classList.toggle('active');
  burgerMenu.classList.toggle('close-toggle');
  mobileContainer.classList.toggle('mobile-container__disable-bg');
  // mobileScroll.classList.toggle('scroll-stop'); //к варианту 2
  document.body.classList.toggle('scroll-stop');
});

// закрыть меню по клику на элементы меню (mobile-item)
mobileItemClose.forEach(function (mobileItemClose) {
  mobileItemClose.addEventListener('click', function() {
    navLogo.classList.remove('nav__logo-mobile');
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('close-toggle');
    mobileContainer.classList.remove('mobile-container__disable-bg');
    // mobileScroll.classList.remove('scroll-stop'); //к варианту 2
    document.body.classList.remove('scroll-stop');
  });
});
