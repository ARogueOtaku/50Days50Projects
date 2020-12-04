const panels = document.querySelectorAll(".panel");
const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
let imagesLoaded = [];
const imageSources = [
  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1432&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];
function applyActive(cPanel) {
  panels.forEach((panel) => {
    panel.classList.remove("panel-active");
  });
  cPanel.classList.add("panel-active");
}

function checkAllLoaded(index) {
  if (!imagesLoaded.includes(index)) imagesLoaded.push(index);
  if (imagesLoaded.length > 3) {
    loader.classList.add("hide");
    container.classList.remove("hide");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    applyActive(e.target);
  });
});

imageSources.forEach((imageSource, i) => {
  let image = new Image();
  image.addEventListener("load", () => checkAllLoaded(i));
  image.src = imageSource;
});
