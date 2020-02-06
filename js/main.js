let mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".arrow",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
}
});

let menuButton = document.querySelector('.menu-btn');
let menu = document.querySelector('.header');    
let openMenu = evt => {
  menu.classList.toggle('hader-active');
  menuButton.classList.toggle('menu-btn-active')
}



menuButton.addEventListener('click', openMenu);