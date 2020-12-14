var buttons = document.querySelectorAll(".modal-button");
var modal = document.querySelector(".modal");
var emptyField = document.querySelector(".modal__base");

for (var button of buttons) {
  button.onclick = function () {
    modal.classList.add("modal__show");
  }
}

emptyField.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal__show")) {
      modal.classList.toggle("modal__show");
    }
  }
});
