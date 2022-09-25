var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lives = document.getElementById("lives");
const storedguess = [];
const URL = "https://random-word-api.herokuapp.com/all";

async function getWord() {
  const api = await fetch(URL).then((api) => api.json());
  const word = api[Math.floor(Math.random() * api.length)];
  window.localStorage.setItem("word", word);
  console.log("done");
}
console.log(window.localStorage.getItem("word"));
getWord();

function printBtn() {
  for (i = 0; i < alphabet.length; i++) {
    document.getElementById("letter").innerHTML +=
      "<button onclick=check()>" + alphabet[i] + "</button>";
  }
}
guessed = function () {
  guess = document.getElementById("guess");
  dashes = document.createElement("ul");
  word = window.localStorage.getItem("word");
  for (var i = 0; i < word.length; i++) {
    dashes.setAttribute("id", "correctWord");
    guesses = document.createElement("li");
    guesses.setAttribute("class", "guess");
    guesses.innerHTML = "_";

    storedguess.push(guesses);
    guess.appendChild(dashes);
    dashes.appendChild(guesses);
  }
};
check = function () {
  var guessedLetter = this.innerHTML;
  this.setAttribute("class", "active");
  this.onclick = null;
  var word = window.localStorage.getItem("word");
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guessedLetter) {
      storedguess[i].innerHTML = guessedLetter;
      counter += 1;
    }
  }
};

guessed();
printBtn();
