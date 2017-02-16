var StarWarsWords = {
	word1: ["H", "A", "N", "S", "O", "L", "O"],
	word2: ["D", "A", "R", "T", "H", "V", "A", "D", "E", "R"],
	word3: ["L", "E", "I", "A"],
	word4: ["L", "U", "K", "E", "S", "K", "Y", "W", "A", "L", "K", "E", "R"],
	word5: ["Y", "O", "D", "A"]
};

var wins = 0;

var placeholderArray = [];

var prevPlaceholderArray = [];

var wordPlaceholder = [];

var lettersGuessed = [];

var word = [];

var wordPlaceholderString = "";

var wordArray = [StarWarsWords.word1, StarWarsWords.word2, StarWarsWords.word3, StarWarsWords.word4, StarWarsWords.word5];

userInput = "";

function createWord(wordArray) {
	word = wordArray[Math.floor(Math.random()*wordArray.length)];
	console.log(word);
	createWordPlaceholder(word);
	return word;
};

createWord(wordArray);

//Creates a placeholder for word.
function createWordPlaceholder(word) {	
	var wordPlaceholder = [];
	for (i = 0; i < word.length; i++) {
		wordPlaceholder.push("_");
	}
	wordPlaceholderString = wordPlaceholder.join(" ");
	document.getElementById('word-placeholder').textContent = wordPlaceholderString;
	return wordPlaceholder;
};

function trackLetterGuesses(userInput) {
	guessesLeft--;
	if (guessesLeft == 0) {
		correctGuessCount = 0;
		createWord(wordArray);
		userInput = "";
		prevPlaceholderArray = [];
		restartGame();
	}
	console.log('Guess is ' + userInput);
	for (i = 0; i < lettersGuessed.length; i++) {
		if (userInput == lettersGuessed[i]) {
			return;
		}
	}
	lettersGuessed.push(userInput);
	console.log("LettersGuessed array item: " + lettersGuessed[0]);
	var lettersGuessedString = lettersGuessed.join(", ");
	document.getElementById('letters-guessed').innerHTML = lettersGuessedString;
	document.getElementById('guess-count').innerHTML = guessesLeft;
	console.log('Guesses left' + guessesLeft);
	return lettersGuessedString;
};

function trackWins(wins) {
	wins++;
	console.log("Value of wins: " + wins);
	return wins;
};

function restartGame(wordPlaceholder) {
	//createWord(wordArray);
	placeholderArray = [];
	guessesLeft = 13;
	correctGuessCount = 0;
	document.getElementById('guess-count').innerHTML = guessesLeft;
	lettersGuessed = [];
	document.getElementById('letters-guessed').innerHTML = lettersGuessed;
}

function buildWord(userInput) {
	if (prevPlaceholderArray.length == 0) {
		placeholderArray = createWordPlaceholder(word);
	} else {
		placeholderArray = prevPlaceholderArray;
	}

	for (var i = 0; i < word.length; i++) {
	  console.log('Word is ' + word);
	  if (userInput == word[i]) {
	  	console.log(userInput + " is in word at " + i);
	  	//
	  	placeholderArray[i] = userInput;
	  }
	}

	prevPlaceholderArray = placeholderArray;

	placeholder = placeholderArray.join(" ");
	console.log("What's going on with placeholder? " + placeholder);
	document.getElementById('word-placeholder').innerHTML = placeholder;

	console.log("Placeholder Array length is " + placeholderArray.length);
	console.log("Placeholder split is " + placeholder.split(","));
	console.log("Word join is " + word.join(" "));
	if (placeholder.split(',') == word.join(" ")) {
		console.log("Woot");
		wins++
		document.getElementById('win-count').innerHTML = wins;
		correctGuessCount = 0;
		createWord(wordArray);
		userInput = "";
		prevPlaceholderArray = [];
		restartGame();
	}
}

var correctGuessCount = 0;
var guessesLeft = 13;
//Function fires when letter selected.
document.onkeyup = function(event) {
	console.log('This is the key entered', event.key);
	var keyPress;

	if (typeof event != 'undefined') {
		keyPress = event.keyCode;
		userInput = String.fromCharCode(keyPress).toUpperCase();
		console.log(userInput + " should match the key entered");
		trackLetterGuesses(userInput);
		buildWord(userInput);
	}
	else if (e) {
		keyPress = e.which;
	}
	return false;
};


