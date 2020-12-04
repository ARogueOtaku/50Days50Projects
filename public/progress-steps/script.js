const back = document.getElementById("back");
const next = document.getElementById("next");
const progress = document.querySelector(".progress");

const circles = document.querySelectorAll(".circle");
let currentActive = 0;
const widthStops = ["0rem", "10.75rem", "20.25rem", "31rem"];

function goBack() {
  console.log(1);
  let stop = currentActive - 1;
  if (widthStops[stop]) {
    circles[currentActive].classList.remove("active");
    currentActive = stop;
    progress.style.width = widthStops[stop];
    next.removeAttribute("disabled");
    next.classList.remove("disabled");
  }
  if (!widthStops[stop - 1]) {
    back.setAttribute("disabled", true);
    back.classList.add("disabled");
  }
}

function goNext() {
  console.log(1);
  let stop = currentActive + 1;
  if (widthStops[stop]) {
    currentActive = stop;
    circles[currentActive].classList.add("active");
    progress.style.width = widthStops[stop];
    back.removeAttribute("disabled");
    back.classList.remove("disabled");
  }
  if (!widthStops[stop + 1]) {
    next.setAttribute("disabled", true);
    next.classList.add("disabled");
  }
}

back.addEventListener("click", goBack);
next.addEventListener("click", goNext);

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => {
    if (i < currentActive) {
      while (i != currentActive) goBack();
    } else if (i > currentActive) {
      while (i != currentActive) goNext();
    }
  });
});
