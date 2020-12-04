const closeButton = document.getElementById("close");
const openButton = document.getElementById("open");
const container = document.querySelector(".container");
const toggler = document.querySelector(".toggler");
const nav = document.querySelector("nav");

closeButton.addEventListener("click", () => {
  container.classList.remove("container-rotate");
  toggler.classList.remove("toggler-rotate");
  nav.classList.remove("show");
});

openButton.addEventListener("click", () => {
  container.classList.add("container-rotate");
  toggler.classList.add("toggler-rotate");
  nav.classList.add("show");
});
