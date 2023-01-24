"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

function closeModalWindow() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModalWindow() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener("click", openModalWindow);
}

// Close btn in modal window
btnCloseModal.addEventListener("click", closeModalWindow);

// close Modal by click on overlay
overlay.addEventListener("click", closeModalWindow);

// "ESC" keypress event
document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModalWindow();
    }
  }
});