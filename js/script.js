const sliders = document.querySelectorAll(".item-slider");
const btn_slider = document.querySelectorAll(".slider-button");
const modal_open = document.querySelector(".modal-open");
const modal_close = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const full_name = modal.querySelector("[name=full-name]");
modal_open.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-active");
  full_name.focus();
});
modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-active");
});
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (modal.classList.contains("modal-active")) {
      evt.preventDefault();
      modal.classList.remove("modal-active");
    }
  }
});
btn_slider[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  btn_slider[0].classList.add("current");
  btn_slider[1].classList.remove("current");
  btn_slider[2].classList.remove("current");
  sliders[0].classList.remove("visually-hidden");
  sliders[1].classList.add("visually-hidden");
  sliders[2].classList.add("visually-hidden");
});
btn_slider[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  btn_slider[0].classList.remove("current");
  btn_slider[1].classList.add("current");
  btn_slider[2].classList.remove("current");
  sliders[0].classList.add("visually-hidden");
  sliders[1].classList.remove("visually-hidden");
  sliders[2].classList.add("visually-hidden");
});
btn_slider[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  btn_slider[0].classList.remove("current");
  btn_slider[1].classList.remove("current");
  btn_slider[2].classList.add("current");
  sliders[0].classList.add("visually-hidden");
  sliders[1].classList.add("visually-hidden");
  sliders[2].classList.remove("visually-hidden");
});

