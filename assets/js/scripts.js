// modals for company profile page
const blocks = document.querySelectorAll(".company-profile__call");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal__header-btn");

blocks.forEach((block) => {
  block.addEventListener("click", () => {
    const modalId = block.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// favorites
const stars = document.querySelectorAll(".favorites");

for (let n = 0; n < stars.length; n++) {
  stars[n].addEventListener("click", function () {
    this.classList.toggle("favorites--active");
  });
}

// option-box
const optionBox = document.querySelectorAll(".options-box__btn");

if(optionBox) {
  for (let m = 0; m < optionBox.length; m++) {
    optionBox[m].addEventListener("click", function () {
      this.parentElement.classList.toggle("options-box--active");
    });
  }

  window.addEventListener("click", (event) => {
    optionBox.forEach((btn) => {
      const parent = btn.parentElement;
      if (!parent.contains(event.target)) {
        parent.classList.remove("options-box--active");
      }
    });
  });
}

// header btn
const headerBtn = document.querySelector(".header__btn");
const header = document.querySelector(".header");

if (header) {
  headerBtn.addEventListener("click", function () {
    this.classList.toggle("header__btn--active");
    header.classList.toggle("header--active");
  });
}