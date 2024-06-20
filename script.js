document.addEventListener("DOMContentLoaded", () => {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const carousel = document.querySelector(".carousel");
  const leftBtn = document.querySelector("#left");
  const rightBtn = document.querySelector("#right");

  let isDown = false;
  let startX;
  let scrollLeft;

  carouselWrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carouselWrapper.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carouselWrapper.addEventListener("mouseleave", () => {
    isDown = false;
  });

  carouselWrapper.addEventListener("mouseup", () => {
    isDown = false;
  });

  carouselWrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - carouselWrapper.offsetLeft;
    console.log(x);
    const move = (x - startX) * 5;
    console.log(move);
    carousel.scrollLeft = scrollLeft - move;
    console.log(carousel.scrollLeft);
  });

  leftBtn.addEventListener("click", () => {
    carousel.scrollLeft -= 200;
  });

  rightBtn.addEventListener("click", () => {
    carousel.scrollLeft += 200;
  });
});
