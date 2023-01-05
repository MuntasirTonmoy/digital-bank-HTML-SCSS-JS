const header = document.querySelector(".header");
const headerToggle = document.querySelector(".header__toggle");
const overlay = document.querySelector(".overlay");

headerToggle.addEventListener("click", () => {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  } else {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  }
});
