var alphabet = ["A","B","C",
"D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"];
const URL = "https://random-word-api.herokuapp.com/all";
const api = await fetch(URL);
const wordlist = api.json;

console.log(wordlist);
function printBtn(){
    for (i = 0; i < alphabet.length; i++){
  document.getElementById('letter').innerHTML +=
   '<button id="' + alphabet[i] + '"onclick="getLetter()">'  + alphabet[i] + '</button>';
 }
}
function take(){
  const lives = 6;
  document.getElementById('lives').innerHTML

}
function getLetter(){
    console.log();
  }


printBtn();
