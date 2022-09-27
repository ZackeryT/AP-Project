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
var numlives = 10;
var counter = 0;
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

function getlives() {
  lives.innerHTML = "You have " + numlives + " lives";
  if (numlives < 1) {
    lives.innerHTML =
      "Game Over, Your word was " +
      window.localStorage.getItem("word") +
      ". Refresh to play again!";
  }
  for (i = 0; i < storedguess.length; i++) {
    if (counter === storedguess.length) {
      lives.innerHTML = "You Win! Refresh to play again";
    }
  }
}
function printBtn() {
  for (i = 0; i < alphabet.length; i++) {
    document.getElementById("letter").innerHTML +=
      '<button id="' +
      alphabet[i] +
      '" onclick="onClick(this.innerHTML, this)">' +
      alphabet[i] +
      "</button>";
  }
}

function onClick(clicked_id, button) {
  console.log(clicked_id);
  console.log(button);
  button.parentNode.removeChild(button);
  var geuss = clicked_id;
  var word = window.localStorage.getItem("word");
  console.log(storedguess);
  for (var i = 0; i < word.length; i++) {
    if (word[i] === geuss) {
      storedguess[i].innerHTML = geuss;
      counter += 1;
      console.log(counter);
    }
  }
  var j = word.indexOf(geuss);
  console.log(j);
  if (j === -1) {
    numlives -= 1;
    getlives();
    console.log("not there");
  } else {
    getlives();
  }
}
getlives();
printBtn();
