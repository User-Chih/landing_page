
// Slider
const slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const prepareCurrentSlide = (int) => {
  activeSlide(int);
  activeDot(int);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

// Slider
// Burger menu
(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu_mobile");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
  });
})();
