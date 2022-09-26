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
var storedguess = [];
var lives = document.getElementById("lives");
const URL = "https://random-word-api.herokuapp.com/word";

guessed = function () {
  holder = document.getElementById("guess");
  correct = document.createElement("ul");
  word = window.localStorage.getItem("word");

  for (var i = 0; i < word.length; i++) {
    correct.setAttribute("id", "correctWord");
    guesses = document.createElement("li");
    guesses.setAttribute("class", "guess");
    guesses.innerHTML = "_";

    storedguess.push(guesses);
    holder.appendChild(correct);
    correct.appendChild(guesses);
  }
};
async function getWord() {
  const api = await fetch(URL).then((api) => api.json());
  const word1 = api[Math.floor(Math.random() * api.length)];
  const word = word1.toUpperCase();
  window.localStorage.setItem("word", word);
  console.log("done");
  guessed();
  console.log(window.localStorage.getItem("word"));
}

getWord();

function printBtn() {
  for (i = 0; i < alphabet.length; i++) {
    document.getElementById("letter").innerHTML +=
      '<button id="' +
      alphabet[i] +
      '" onclick="onClick(this.innerHTML)">' +
      alphabet[i] +
      "</button>";
  }
}

function onClick(clicked_id) {
  console.log(clicked_id);
  var geuss = clicked_id;
  var word = window.localStorage.getItem("word");
  console.log(storedguess);
  for (var i = 0; i < word.length; i++) {
    if (word[i] === geuss) {
      storedguess[i].innerHTML = geuss;
    }
    var j = word.indexOf(geuss);
    if (j === -1) {
      console.log("not there");
    }
  }
}

printBtn();
