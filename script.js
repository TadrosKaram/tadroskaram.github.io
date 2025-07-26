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
