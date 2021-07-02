const sliders = document.querySelectorAll(".item-slider");
const btn_slider = document.querySelectorAll(".slider-button");
const modal_open = document.querySelector(".modal-open");
const modal_close = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const full_name = modal.querySelector("[name=full-name]");
const email = modal.querySelector("[name=email]");
const letter = modal.querySelector("[name=letter]")
let storage_name = "";
let storage_email = "";
let is_storage_support = true;
try {
  storage_name = localStorage.getItem("name");
  storage_email = localStorage.getItem("email");
} catch (err) {
  is_storage_support = false;
};
modal_open.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-active");
  if (is_storage_support) {
    full_name.value = storage_name;
    letter.focus();
  } else { full_name.focus(); };
  if (is_storage_support) {
    email.value = storage_email;
    letter.focus();
  } else { email.focus() };
});
modal.addEventListener("submit", function (evt) {
  if (!full_name.value || !email.value) {
    evt.preventDefault()
    modal.classList.add("modal-error");
  } else { localStorage.setItem("name", full_name.value), localStorage.setItem("email", email.value) }

});
modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
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

