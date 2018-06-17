// Creates an array that lists out all of the word options).
var wordChoices = ["calf", "cub", "pup", "hatchling", "chick", "piglet", "fry", "gosling", "baby", "infant", "larva", "kitten", "fawn", "foal", "puggle"];
    
    //defines the global variables
var wins = 0;
var losses = 0;
var guesses = 15;
var guessesSoFar = [];

//computer chooses a random letter
var computerChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//Test to see the computer choice
console.log("Correct Word: " + computerChoice);

function reset() {
            computerChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
            console.log("Correct Word: " + computerChoice);
            guesses = 15;
            guessesSoFar = [];
}


// game begins when user presses a key (also converts upper case to lower case)
document.onkeyup = function (userClick) {
    var userGuess = userClick.key.toLowerCase();

    // game begins only if the user presses a letter key
    if (letter.includes(userGuess)) {
        guessesSoFar.push(userGuess);

        //if user guesses correctly, add a win and choose a new letter
        if (userGuess === computerChoice) {
            wins += 1;
            alert("Wow! You truly are psychic!");
            reset();
        }

    
        //if user guesses incorrectly, remove one from guesses remaining
        else {
            guesses -= 1;

            //when no more guesses are left, the user loses and choose a new letter
            if (guesses < 1){
                losses++;
                alert("Hmmm, maybe you aren't psychic after all..." );
                reset();
            }
        }
    }
    //show the counter variables in the html 
    document.getElementById("win-count").innerHTML = wins;
    document.getElementById("loss-count").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guesses;
    document.getElementById("guesses-so-far").innerHTML = guessesSoFar;

}