// VARIABLES
// =================================================================================
var wins = 0;
var placeholderArray = [];
var prevPlaceholderArray = [];
var wordPlaceholder = [];
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 13;

// Object of Star Wars Hangman words.
var StarWarsWords = {
	word1: ["H", "A", "N", "S", "O", "L", "O"],
	word2: ["D", "A", "R", "T", "H", "V", "A", "D", "E", "R"],
	word3: ["L", "E", "I", "A"],
	word4: ["L", "U", "K", "E", "S", "K", "Y", "W", "A", "L", "K", "E", "R"],
	word5: ["Y", "O", "D", "A"]
};

// Array of Star Wars Hangman words created from object.
var wordArray = [StarWarsWords.word1, StarWarsWords.word2, StarWarsWords.word3, StarWarsWords.word4, StarWarsWords.word5];

// Initialize game on window load.
createWord(wordArray);

// MAIN PROCESS
// =================================================================================
document.onkeyup = function(event) {
	console.log('This is the key entered', event.key);
	var keyPress;

	if (typeof event != 'undefined') {
		keyPress = event.keyCode;

		// Convert user input key to upper case string.
		userInput = String.fromCharCode(keyPress).toUpperCase();
		console.log(userInput + " should match the key entered");

		// Track user guesses over time.
		trackLetterGuesses(userInput);

		// Pause audio.
		pauseAudio();

		// Build hangman word based on new user input.
		buildWord(userInput);
	}

	// No idea what this does, but seems to be needed.
	else if (e) {
		keyPress = e.which;
	}
	return false;
};

// FUNCTIONS
// =================================================================================

//Create array from randomly selected Star Wars word Array.
function createWord(wordArray) {
	word = wordArray[Math.floor(Math.random()*wordArray.length)];
	console.log(word);

	//Create placeholder for word in UI.
	createWordPlaceholder(word);
	return word;
};

//Create placeholder for word in UI.
function createWordPlaceholder(word) {	
	var wordPlaceholder = [];

	// Fill array with underscores.
	for (i = 0; i < word.length; i++) {
		wordPlaceholder.push("_");
	}

	// Convert word placeholder array to string for displaying in UI.
	wordPlaceholderString = wordPlaceholder.join(" ");

	// Display word placeholder in UI.
	document.getElementById('word-placeholder').textContent = wordPlaceholderString;
	return wordPlaceholder;
};

// Keep track of user guesses.
function trackLetterGuesses(userInput) {

	/* 
	 * Check if letter already guessed.
	 * Don't track letters more than once.
	 */
	for (i = 0; i < lettersGuessed.length; i++) {
		if (userInput == lettersGuessed[i]) {
			return;
		}
	}

	// Push letter guessed.
	lettersGuessed.push(userInput);
	console.log("LettersGuessed array item: " + lettersGuessed[0]);
	
	// Convert letters guessed array to string for displaying in UI.
	var lettersGuessedString = lettersGuessed.join(", ");
	document.getElementById('letters-guessed').innerHTML = lettersGuessedString;

	// Each guess reduces number of guesses left. 
	guessesLeft--;

	// Display guesses left in UI.
	document.getElementById('guess-count').innerHTML = guessesLeft;
	console.log('Guesses left' + guessesLeft);


	// Game restarts when no more guesses left.
	if (guessesLeft == 0) {
		restartGame();
	}

	return lettersGuessedString;
};

// Builds hangman word as user guesses letters.
function buildWord(userInput) {

	// Initialize placeholder array to underscore placeholder.
	if (prevPlaceholderArray.length == 0) {
		placeholderArray = createWordPlaceholder(word);

	// Makes it possible to see letters and underscores.
	} else {
		placeholderArray = prevPlaceholderArray;
	}

	// Replace underscore with matching letter.
	for (var i = 0; i < word.length; i++) {
	  console.log('Word is ' + word);
	  if (userInput == word[i]) {
	  	console.log(userInput + " is in word at " + i);
	  	//
	  	placeholderArray[i] = userInput;
	  }
	}

	prevPlaceholderArray = placeholderArray;

	// Convert placeholder array to string for display in UI.
	placeholder = placeholderArray.join(" ");
	document.getElementById('word-placeholder').innerHTML = placeholder;

	console.log("Placeholder Array length is " + placeholderArray.length);
	console.log("Placeholder split is " + placeholder.split(","));
	console.log("Word join is " + word.join(" "));
	
	// User wins when placeholder matches word.
	if (placeholder.split(',') == word.join(" ")) {
		console.log("Woot");
		wins++;
		playAudio();
		document.getElementById('win-count').innerHTML = wins;
		restartGame();
	}
};

function playAudio() { 
	// Play some music when you win.
	var vid = document.getElementById("music"); 
    vid.play(); 
}

function pauseAudio() { 
	// Play some music when you win.
	var vid = document.getElementById("music"); 
    vid.pause(); 
}

// Restart game, initializing several values.
function restartGame(wordPlaceholder) {
	
	// Add new word.
	createWord(wordArray);

	//Empty user input and placeholder values.
    userInput = "";
	prevPlaceholderArray = [];
	placeholderArray = [];

	// Reset remaining guesses.
	guessesLeft = 13;

	// Reset guess count.
	correctGuessCount = 0;
	document.getElementById('guess-count').innerHTML = guessesLeft;

	// Reset list of letters guessed.
	lettersGuessed = [];
	document.getElementById('letters-guessed').innerHTML = lettersGuessed;
};


