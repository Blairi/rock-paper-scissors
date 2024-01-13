document.addEventListener("DOMContentLoaded", () => {
  rulesModal();
});

const rulesModal = () => {

  const body = document.querySelector("body");
  const overlay = document.querySelector("#overlay");

  const openModalButton = document.querySelector("#rules");
  openModalButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    body.classList.add("overflow-hidden");

    overlay.classList.remove("hidden");
    overlay.classList.add("flex")

  });

  const closeModalButton = document.querySelector("#close");
  closeModalButton.addEventListener("click", (event) => {
    event.preventDefault();

    body.classList.remove("overflow-hidden");

    overlay.classList.remove("flex")
    overlay.classList.add("hidden");

  });
}

