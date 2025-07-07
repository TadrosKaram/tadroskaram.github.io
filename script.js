//Pointer effect

const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
});

///////////////////////////////////////
//nav bar hamburger btn

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

//open
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//////////////////////////////////////
//scroll up button

const scrollUp = document.querySelector("#thescroll");
window.addEventListener("scroll", function () {
  let isClicked = false;
  if (window.scrollY > 500) {
    scrollUp.classList.remove("hide-scroll");
    isClicked = true;
  } else if (window.scrollY == 0) {
    scrollUp.classList.add("hide-scroll");
  }
  console.log(window.scrollY);
});
