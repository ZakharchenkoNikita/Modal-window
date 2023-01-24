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

for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// Close btn in modal window
btnCloseModal.addEventListener("click", closeModalWindow);

// close Modal by click on overlay
overlay.addEventListener("click", closeModalWindow);