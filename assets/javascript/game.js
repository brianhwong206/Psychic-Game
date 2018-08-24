var wins = 0; // count of wins, default value of 0
var losses = 0; // count of losses, default value of 0
var userGuessOriginal; // declaration that will hold the user's original input (upper-cased or lower-cased)
var userGuess; // user submission as lowercase value
var guessesAttempted = 0; //count of user guesses
var guessesRemaining = 5; // guesses remaining for the user, default value of 5.
var guessesSoFar = []; // array that will hold the user's current inputs.
var userGuessAlreadyInArray = guessesSoFar.includes(userGuess); // boolean to check if present input has already been used.


var validUserInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // acceptable inputs from user

var userRemainingChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // array that will tick down as user inputs guesses

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //computer's available options

// Computer's Selection
var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //randomzied and numerical value is rounded downward to the nearest integer
console.log(computerSelection);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {      

// Determines which key was pressed.
userGuessOriginal = event.key;

userGuess = userGuessOriginal.toLowerCase(); // converts original input into a lower case form and stores it as userGuess.

//Functions

function userWin(){
    alert("You won! You chose: " + userGuess + " and the computer chose: " + computerSelection + ".");
    wins++;

}

function userLose(){
    alert("You lost! Computer chose: " + computerSelection + ".");
    losses++;
}

function reset(){
    guessesSoFar.length = 0; 
    guessesAttempted = 0;
    guessesRemaining = 5;
    computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userRemainingChoices.length = 0;
    userRemainingChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
}

// Events
if (validUserInputs.includes(userGuess)){ // if user input is present with the valid array, then proceed

    if ((userGuess === computerSelection) && (guessesRemaining > 0)){ // win scenario               
        userWin(); // call a function to reset the computer's Guess, userRemaining choices, guessesleft, alert user of win!
        reset();
    }

    else if ((userGuess !== computerSelection) && (guessesRemaining > 1)){ // guess again

            if (userGuessAlreadyInArray = guessesSoFar.includes(userGuess)) {
            alert("You have already guessed this letter. Try another one.") // if user has already attempted a letter, this alert will display.
            }
        
            else{
            guessesSoFar.push(userGuess); // adds to user Guessed Array;
            guessesRemaining--; // removes 1 from guess count
            guessesAttempted++; // increases guesses attepted by 1
            var letterIndex = userRemainingChoices.indexOf(userGuess); // declaration of letterIndex to assist with removing Remaining Choices.
            userRemainingChoices.splice(letterIndex,1); // uses letterIndex to remove index value from Remaining Choices
            }

    }

    else if ((userGuess !== computerSelection) && (guessesRemaining < 2)) { //  game over scenario when userGuess is incorrect and is final remaining guess
        userLose();
        reset();
    }
                   
    //html
    //original attempt:
        //     var html =

        //     "<p>Guess what letter I'm thinking of. </p>" +
        //     "<p>Wins: " + wins + "</p>" +
        //     "<p>Losses: " + losses + "</p>" +
        //     "<p>Guesses Attempted: " + guessesAttempted + "</p>" +
        //     "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
        //     "<p>Your Current Input: " + userGuess + "</p>" +    
        //     // "<p>Your Current InputIndex: " + letterIndex + "</p>" +
        //     "<p>Your Guesses so far: " + guessesSoFar.join(", ") + "</p>" +
        //     //"<p>Current User Guess has already been used: " + userGuessAlreadyInArray + "</p>" +
        //     "<p>Your Available Options: " + userRemainingChoices.join(", ") + "</p>";
        //     //"<p>Computer Section: " + computerSelection + "</p>"
            

        // // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html; // original attempt


        //new attempt(much better) with DOM:
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        document.querySelector("#guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
        document.querySelector("#guessesAttempted").innerHTML = "Guesses Attempted: " + guessesAttempted;
        document.querySelector("#currentInput").innerHTML = "Your Current Guess: " + userGuess;
        document.querySelector("#guessesSoFar").innerHTML = "Guesses So Far: " + guessesSoFar.join(", ");
        document.querySelector("#userRemainingChoices").innerHTML = "Remaining Choices: " + userRemainingChoices.join(", ");
    }
}


