/*
step 1: create start button to start the game
step 2: create a timer that starts when presented with the first question
step 3: create if statement (if you answer question correctly, it will present another question and say "correct!")
step 4: create if statement (if you answer question incorrectly, deduct time from timer and say "incorrect")
step 5: clear interval when all questions are answered (stop the clock)
step 6: when game is over "all done! your final score is ____."
step 7: create textbox to insert initials at the end of the game
step 8: create view highscore in top left to view highscore (use local storage)
*/

//variables
var startButton = document.querySelector(".start-button");
var finalScore = "";
var highscores = 0;
var questions = [
    {
        question: "Commonly used data types DO NOT include: "
        choices: ["strings", "booleans", "alerts", "numbers"]
        answer: 2
    }
    {
        question: "The condition of and if/else statement is enclosed with___."
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"]
        answer: 2
    }
    {
        question: "Arrays in JavaScript can be used to store____."
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"]
        answer: 3
    }
]
// Start button
