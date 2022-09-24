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
const URL = "https://random-word-api.herokuapp.com/all";
async function getWord() {
  const api = await fetch(URL).then((api) => api.json());
  const word = api[Math.floor(Math.random() * api.length)];
  window.localStorage.setItem("word", word);
  console.log(word);
}
getWord();
const word = window.localStorage.getItem("word");

function printBtn() {
  for (i = 0; i < alphabet.length; i++) {
    document.getElementById("letter").innerHTML +=
      '<button id="' +
      alphabet[i] +
      '"onclick="getLetter()">' +
      alphabet[i] +
      "</button>";
  }
}
function take() {
  const lives = 6;
  document.getElementById("lives").innerHTML;
}
function getLetter() {
  console.log();
}

printBtn();
