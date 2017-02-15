var StarWarsWords = {
	word1: ["H", "A", "N", "S", "O", "L", "O"],
	word2: ["L", "E", "I", "A"]
};

var wordArray = [StarWarsWords.word1, StarWarsWords.word2];

//Randomly selects word from StarWarsWords object.
var word = wordArray[Math.floor(Math.random()*wordArray.length)];
console.log(word);

//Creates a placeholder for word.
function createWordPlaceholder(word) {
	var wordPlaceholder = [];
	for (i = 0; i < word.length; i++) {
		wordPlaceholder.push("_");
	}
	wordPlaceholder = wordPlaceholder.join(" ");
	return wordPlaceholder;
};

var placeholder = createWordPlaceholder(word);
console.log(placeholder);

//Displays word placeholder in html.
document.getElementById('word-placeholder').textContent = placeholder;

/*
function checkLetterInWord(userInput, word, placeholder) {
	for (var i = 0; i < word.length; i++) {
	  //Check to see if letter exists in word.
	  if (userInput == word[i]) {
	  	console.log(userInput + " is in word at " + i);
	  	placeholder = placeholder.substring(0, i) + userInput + placeholder.substring(i+1);
	  	document.getElementById('word-placeholder').textContent = placeholder;
	  }
	}
}
*/

//Function fires when letter selected.
document.onkeyup = function(event) {
	console.log('This is the key entered', event.key);
	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userInput + " should match the key entered");
	//checkLetterInWord(userInput, word, placeholder);
	for (var i = 0; i < word.length; i++) {
	  //Check to see if letter exists in word.
	  if (userInput == word[i]) {
	  	console.log(userInput + " is in word at " + i);
	  	placeholder = placeholder.substring(0, i) + userInput + placeholder.substring(i+1);
	  	document.getElementById('word-placeholder').textContent = placeholder;
	  }
	}
};

//


