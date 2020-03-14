var button = document.querySelector(".form-btn");
var popup = document.querySelector(".hotel-searching");
var field = document.querySelector(".check-field");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-hide");
    popup.classList.toggle("modal-show");
});

popup.addEventListener("submit", function (evt) {
    if (!field.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
});