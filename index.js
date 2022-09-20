var alphabet = ["A","B","C",
"D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"];
const URL = "https://random-word-api.herokuapp.com/word";

function printBtn(c){
    for (var i = 0; i < c.length; i++){
        $('.letters').append('<button value='+ c[i] + '>' + '</button>');
    }
}
printBtn(alphabet);

async function getWord(URL){
    const response = await fetch(URL);
    console.log(response);
}
getWord.type(URL);