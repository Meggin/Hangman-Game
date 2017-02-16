var StarWarsWords = {
	word1: ["H", "A", "N", "S", "O", "L", "O"],
	word2: ["L", "E", "I", "A"]
};

var wins = 0;

var wordArray = [StarWarsWords.word1, StarWarsWords.word2];

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
var space = " ";
var placeholderArray = placeholder.split(space);

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

function trackLetterGuesses(guess) {
	console.log('event.key is ' + key);
	var lettersGuessed = [];
	lettersGuessed = lettersGuessed.push(key);
	console.log(lettersGuessed);
	lettersGuessed = lettersGuessed.join(", ");
	document.getElementById('letters-guessed').innerHTML = lettersGuessed;
}

function trackWins(wins) {
	wins++;
	console.log("Value of wins: " + wins);
	document.getElementById('win-count').innerHTML = wins;
}

function restartGame() {
	guessesLeft = 13;
	document.getElementById('guess-count').innerHTML = guessesLeft;
	createWordPlaceholder(word, wordArray);
}

var correctGuessCount = 0;
var lettersGuessed = "";
var guessesLeft = 13;
//Function fires when letter selected.
document.onkeyup = function(event) {
	console.log('This is the key entered', event.key);
	var guess = event.key;
	guessesLeft--;
	document.getElementById('guess-count').innerHTML = guessesLeft;
	console.log('Guesses left' + guessesLeft);
	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userInput + " should match the key entered");
	//checkLetterInWord(userInput, word, placeholder);
	for (var i = 0; i < word.length; i++) {
	  //Check to see if letter exists in word.
	  if (userInput == word[i]) {
	  	console.log(userInput + " is in word at " + i);
	  	correctGuessCount++;
	  	console.log(correctGuessCount);
	  	console.log("Word length = " + word.length);
	  	if (correctGuessCount == word.length) {
	  		console.log("Woot");
	  		trackWins(wins);
	  		restartGame();
	  	}
	  	placeholderArray[i] = userInput;
	  	console.log(userInput);
	  	placeholder = placeholderArray.join(" ");
	  	document.getElementById('word-placeholder').innerHTML = placeholder;
	  }
	}
};


