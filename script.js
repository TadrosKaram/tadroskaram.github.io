//nav bar hamburger btn

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

//open
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//////////////////////////////////////
