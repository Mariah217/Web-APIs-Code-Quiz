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
var choices = document.querySelector("#choices");
var timer;
var timerCount; 
var isAllDone = false;
var finalScore = "";
var highscores = 0;
var questions = [
    //The first question will be [0]
    {
        question: "Commonly used data types DO NOT include: ",
        choiceA: "strings", 
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "C"
    }
    //The second question will be [1]
    {
        question: "The condition of and if/else statement is enclosed with___.",
        choiceA: "quotes", 
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        choiceD: "square brackets",
        answer: "C"
    }
    //the third question will be [2]
    {
        question: "Arrays in JavaScript can be used to store____.",
        choiceA: "numbers and strings", 
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        answer: "D"
    }
]
// Start button
    function startGame() {
        isAllDone = false;
        timerCount = 75;
        startButton.disabled = true;
        startTimer()
        console.log("hi")
    }
    
    function startTimer() {
        timer=setInterval(function() {
            timerCount--;
            timerElement.textContent = timerCount;
            if (timerCount > 0) {
                if (timerCount > 0){
                    clearInterval(timer);
                    isAllDone();
                    console.log(isAllDone);
                }
            }
            if (timerCount === 0){
                clearInterval(timer);
                isAllDone();
            }
        }, 1000);
    }