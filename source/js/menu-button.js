var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  navMain.classList.toggle("main-nav--closed")
  navMain.classList.toggle("main-nav--opened")

  if(navMain.classList.contains("main-nav--closed")) {
    navToggle.setAttribute('aria-label', "Открыть меню");
  } else {
    navToggle.setAttribute('aria-label', "Закрыть меню");
  }
});
