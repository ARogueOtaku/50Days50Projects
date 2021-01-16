let joke = document.querySelector(".joke");
let getjoke = document.querySelector(".getjoke");

getjoke.addEventListener("click", fetchJoke);

async function fetchJoke() {
  getjoke.disabled = true;
  getjoke.classList.add("disabled");
  let response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  let gotJoke = await response.json();
  if (gotJoke.status == 200) joke.innerText = gotJoke.joke;
  else
    joke.innerText =
      "I am cooking up a killer joke right now. Ask me again after a bit!";
  getjoke.classList.remove("disabled");
  getjoke.disabled = false;
}

fetchJoke();
