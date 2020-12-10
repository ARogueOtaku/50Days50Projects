const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", update);

function update() {
  boxes.forEach((box) => {
    if (isElementInViewport(box)) box.classList.remove("hide");
    else box.classList.add("hide");
  });
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
