var wins = 0;
var losses = 0;
var guessesLeft = 26;
var guessesSoFar= [];



//Computer's Avaliable Selection
var computerAvailableSection= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly chooses a choice from the options array. This is the computer's selection.
var computerSelection = computerAvailableSection[Math.floor(Math.random() * computerAvailableSection.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {      
    
    // Determines which key was pressed.
    var userGuess = event.key;
    guessesSoFar = guessesLeft.push(userGuess)

    alert(userGuess);



    if ((userguess === computerSelection)) {
        Wins++
    }
    else if ((userGuess !== computerSelection) {

    }
}

