const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");

headerMenu.addEventListener("click", () => {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  } else {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  }
});
