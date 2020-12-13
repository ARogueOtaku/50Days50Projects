const xbox = document.querySelector(".xbox");
const ps = document.querySelector(".ps");

xbox.addEventListener("mouseenter", () => {
  xbox.classList.add("expand");
  ps.classList.add("shrink");
});

ps.addEventListener("mouseenter", () => {
  ps.classList.add("expand");
  xbox.classList.add("shrink");
});

xbox.addEventListener("mouseleave", () => {
  xbox.classList.remove("shrink");
  ps.classList.remove("shrink");
  xbox.classList.remove("expand");
});

ps.addEventListener("mouseleave", () => {
  xbox.classList.remove("shrink");
  ps.classList.remove("shrink");
  ps.classList.remove("expand");
});
