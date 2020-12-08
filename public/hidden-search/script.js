const inp = document.querySelector(".input");
const search = document.querySelector(".search");

search.addEventListener("click", () => {
  inp.classList.toggle("inactive");
  inp.focus();
});
