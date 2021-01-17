let openers = [...document.querySelectorAll(".opener")];
let closers = [...document.querySelectorAll(".closer")];

function activate(e) {
  e.target.parentElement.classList.add("faq-active");
}

function deactivate(e) {
  e.target.parentElement.classList.remove("faq-active");
}

openers.forEach((opener) => {
  opener.addEventListener("click", activate);
});

closers.forEach((closer) => {
  closer.addEventListener("click", deactivate);
});
