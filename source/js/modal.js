var button = document.querySelector(".product-hit__link");
var modal = document.querySelector(".modal");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal__show");
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal__show")) {
          modal.classList.toggle("modal__show");
      }
  }
});
