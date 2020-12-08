const loader = document.querySelector(".loader");
let timer,
  currentPercent = 0,
  maxPercent = 100;

window.addEventListener("load", () => {
  const timer = setInterval(update, 20);
});

function update() {
  currentPercent++;
  if (currentPercent > maxPercent) {
    clearInterval(timer);
    return;
  }
  loader.innerText = currentPercent + "%";
  let opacity = maxPercent - currentPercent;
  loader.style.opacity = (opacity > 1 ? opacity + 20 : opacity) * (1 / 100);
  loader.style.transform = `scale(${
    (opacity > 1 ? opacity + 20 : opacity) * (1 / 100)
  })`;
  document.body.style.backdropFilter = `blur(${opacity}px)`;
}
