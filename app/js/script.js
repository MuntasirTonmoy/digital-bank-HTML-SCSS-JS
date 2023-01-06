const header = document.querySelector(".header");
const headerToggle = document.querySelector(".header__toggle");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has-fade");

headerToggle.addEventListener("click", () => {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    fadeElms.forEach((elm) => {
      elm.classList.add("fade-in");
      elm.classList.remove("fade-out");
    });
  } else {
    fadeElms.forEach((elm) => {
      elm.classList.add("fade-out");
      elm.classList.remove("fade-in");
    });
  }
});
