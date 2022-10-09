let slider = document.querySelectorAll(".slide");
let counter = 0;
slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const pre = () => {
  if (counter > "0") {
    counter--;
    slideImge();
  }
};
const next = () => {
  if (counter < "4") {
    counter++;
    slideImge();
  }
};

const slideImge = () => {
  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
