/*
step 1: display start page, title, paragraph and start button
step 2: timer will start when start button is clicked
step 3: create start button to start the game and timer, display question    and 4 answer choices/buttons, start page is hidden, only display question page (after you select an answer, it will go to another page and hide previous question page)
step 4.: create if statement (if you answer question correctly, it will present another question and say "correct!")
step 5: create if statement (if you answer question incorrectly, deduct 10 seconds from timer and say "incorrect")
step 6: clear interval when all questions are answered (stop the clock)
step 7: when game is over "all done! your final score is ____." the time remaining on the clock is your final score.
step 8: create textbox to insert initials at the end of the game
step 9: create view highscore in top left to view highscore (use local storage)
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
    //reference: 
    //questions.question[0]
    //qustions.choiceA[0] etc
    {
        question: "Commonly used data types DO NOT include: ",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "C"
    },
    //reference: 
    //questions.question[1]
    //questions.choiceA[1] etc
    {
        question: "The condition of and if/else statement is enclosed with___.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        choiceD: "square brackets",
        answer: "C"
    },
    //reference: 
    //questions.question[2]
    //questions.choiceA[2] etc
    {
        question: "Arrays in JavaScript can be used to store____.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        answer: "D"
    },
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
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount > 0) {
            if (timerCount > 0) {
                clearInterval(timer);
                isAllDone();
                console.log(isAllDone);
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            isAllDone();
        }
    }, 1000);
}