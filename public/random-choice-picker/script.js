let choices = document.querySelector("#choices");
let currentChoice = null;
let choiceContainer = document.querySelector(".choice-container");

function processChoices(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    selectChoice();
    return;
  }
  let choicesValue = choices.value;
  let choiceHTML = choicesValue
    .split(",")
    .filter((choice) => choice.length > 0)
    .map((choice) => `<span class='choice'>${choice}</span>`)
    .join("\n");
  choiceContainer.innerHTML = choiceHTML;
}

function selectChoice() {
  let allChoices = choiceContainer.querySelectorAll(".choice");
  let cIdx = 0;
  let lIdx = 0;
  let count = 0;
  let timer = setInterval(() => {
    cIdx = Math.floor(Math.random() * allChoices.length);
    allChoices[lIdx].classList.remove("selected");
    allChoices[cIdx].classList.add("selected");
    lIdx = cIdx;
    count++;
    if (count > 30) clearInterval(timer);
  }, 100);
}

choices.addEventListener("keyup", processChoices);
