const header = document.querySelector(".header");
const headerToggle = document.querySelector(".header__toggle");
const overlay = document.querySelector(".overlay");
const fadeElms = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

headerToggle.addEventListener("click", () => {
  header.classList.toggle("open");

  //when the menu is open
  if (header.classList.contains("open")) {
    fadeElms.forEach((elm) => {
      body.classList.add("noscroll");
      elm.classList.add("fade-in");
      elm.classList.remove("fade-out");
    });
  }

  //when the menu is close
  else {
    body.classList.remove("noscroll");
    fadeElms.forEach((elm) => {
      elm.classList.add("fade-out");
      elm.classList.remove("fade-in");
    });
  }
});
