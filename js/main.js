const burger = document.querySelector(".burger");
const header = document.querySelector(".header--adaptive");
const cross = document.querySelector(".header-cross");
const swiperClass = document.querySelector(".page-swiper-mobile");
const wrapper = document.querySelector(".wrapper");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  header.classList.toggle("header--adaptive--active");
});

cross.addEventListener("click", () => {
  burger.classList.remove("burger--active");
  header.classList.remove("header--adaptive--active");
});

const pageSlider = new Swiper(".page-swiper", {
  wrapperClass: "page-swiper-wrapper",
  slideClass: "page-swiper-slide",
  direction: "vertical",
  slidesPerView: "auto",
  keyboard: {
    enabled: true,
    onluInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  pagination: {
    el: ".page-pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "bullet-active",
  },
  speed: 800,
  watchOverflow: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

if (window.innerWidth <= 1024) {
  pageSlider.disable();
  swiperClass.classList.remove("page-swiper");
}

