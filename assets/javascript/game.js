var StarWarsWords = {
	word1: ["H", "A", "N", "S", "O", "L", "O"],
	word2: ["L", "E", "I", "A"]
};

var wins = 0;

placeholderArray = [];

lettersGuessed = [];

word = [];

var wordArray = [StarWarsWords.word1, StarWarsWords.word2];

userInput = "";

function createWord(wordArray) {
	word = wordArray[Math.floor(Math.random()*wordArray.length)];
	console.log(word);
	var placeholder = createWordPlaceholder(word);
	console.log("Placeholder = " + placeholder);
	document.getElementById('word-placeholder').textContent = placeholder;
	return word;
}

createWord(wordArray);

//window.onload = function() {
	//createWord(wordArray);
	//var placeholder = createWordPlaceholder(word);
    //console.log(placeholder);
  
    //Displays word placeholder in html.
    //document.getElementById('word-placeholder').textContent = placeholder;
    //var space = " ";
    //var placeholderArray = placeholder.split(space);
    //return placeholderArray;
//}

//var word = wordArray[Math.floor(Math.random()*wordArray.length)];
//console.log(word);

//Creates a placeholder for word.
function createWordPlaceholder(word) {	
	var wordPlaceholder = [];
	for (i = 0; i < word.length; i++) {
		wordPlaceholder.push("_");
	}
	wordPlaceholder = wordPlaceholder.join(" ");
	return wordPlaceholder;
};

function createPlaceholder(placeholder) {
	var space = " ";
	var placeholder = placeholder.split(space);
}

//var placeholder = createWordPlaceholder(word);
//console.log(placeholder);
//var space = " ";
//var placeholderArray = placeholder.split(space);

//Displays word placeholder in html.
//document.getElementById('word-placeholder').textContent = placeholder;

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

function trackLetterGuesses(userInput) {
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
}

function trackWins(wins) {
	wins++;
	console.log("Value of wins: " + wins);
	document.getElementById('win-count').innerHTML = wins;
}

function restartGame() {
	//createWord(wordArray);
	guessesLeft = 13;
	correctGuessCount = 0;
	placeholderArray = [];
	document.getElementById('guess-count').innerHTML = guessesLeft;
	lettersGuessed = [];
	document.getElementById('letters-guessed').innerHTML = lettersGuessed;
	//newPlaceholder = createWordPlaceholder(word);
	//console.log("Placeholder: " + newPlaceholder);

	//Displays word placeholder in html.
	//document.getElementById('word-placeholder').textContent = placeholder;
	//document.getElementById('word-placeholder').innerHTML = newPlaceholder;
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
	}
	else if (e) {
		keyPress = e.which;
	}

	//lettersGuessed.push(String.fromCharCode(keyPress));
	//console.log("LettersGuessed is working!" + lettersGuessed);
	//document.getElementById('letters-guessed').innerHTML = lettersGuessed;

	//trackLetterGuesses(userInput);
	//checkLetterInWord(userInput, word, placeholder);

	guessesLeft--;
	document.getElementById('guess-count').innerHTML = guessesLeft;
	console.log('Guesses left' + guessesLeft);

	for (var i = 0; i < word.length; i++) {
	  console.log('Word is ' + word);
	  if (userInput == word[i]) {
	  	console.log(userInput + " is in word at " + i);
	  	placeholderArray[i] = userInput;
	  	placeholder = placeholderArray.join(" ");
	  	console.log("userInput = " + userInput);
	  	document.getElementById('word-placeholder').innerHTML = placeholder;
	  	correctGuessCount++;
	  	console.log(correctGuessCount);
	  	if (correctGuessCount == word.length) {
	  		console.log("Woot");
	  		trackWins(wins);
	  		wins++;
	  		document.getElementById('win-count').innerHTML = wins;
	  		correctGuessCount = 0;
	  		createWord(wordArray);
	  		userInput = "";
	  		restartGame();
	  	}
	  }
	}
	return false;
};


