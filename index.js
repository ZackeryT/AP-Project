const alphabet = ["A","B","C",
"D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"];
const URL = "https://random-word-api.herokuapp.com/word";

async function getWord(URL){
    const response = await fetch(URL);
    console.log(response);
}
getWord();