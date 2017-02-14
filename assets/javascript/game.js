var StarWarsWords = {
	word1: ["H", "A", "N", "S", "O", "L", "0"],
	word2: ["L", "E", "I", "A"]
};

var wordArray = [StarWarsWords.word1, StarWarsWords.word2];

var word = wordArray[Math.floor(Math.random()*wordArray.length)];
console.log(word);

/*
function chooseWord(wordArray) {
	var word = "placeholder";
	return word;
}
*/

function createWordPlaceholder(word) {
	var wordPlaceholder = [];
	for (i = 0; i < word.length; i++) {
		wordPlaceholder.push("_");
	}
	wordPlaceholder = wordPlaceholder.join(" ");
	return wordPlaceholder;
}

var lettersGuessed = document.getElementById("letters-guessed");

document.onkeyup = function(event) {
  console.log('yo i am here now', event.key)
  lettersGuessed.textContent = event.key;
};

var placeholder = createWordPlaceholder(word);
console.log(placeholder);

document.getElementById('word-placeholder').textContent = placeholder;

