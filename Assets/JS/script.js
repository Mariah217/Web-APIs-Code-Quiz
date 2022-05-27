/*
step 1: display start page, title, paragraph and start button
step 2: timer will start when start button is clicked
step 3: create start button to start the game and timer, use addeventlistener, display question and 4 answer choices/buttons, start page is hidden, only display question page (after you select an answer, it will go to another page and hide previous question page)
step 4.: create if statement (if you answer question correctly, it will present another question and say "correct!")
step 5: create if statement (if you answer question incorrectly, deduct 10 seconds from timer and say "incorrect")
step 6: clear interval when all questions are answered (stop the clock)
step 7: when game is over "all done! your final score is ____." the time remaining on the clock is your final score.
step 8: create input textbox to insert initials at the end of the game
step 9: create view highscore in top left to view highscore (use local storage) show dashboard of all the highscores. When you click submit, should store initial and score in local storage.
*/

//variables
var questionsEl = document.querySelector(".questions");
var introductionEl = document.querySelector("#introduction");
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector(".start-button");
var saveBtn = document.querySelector("#save");
var choices = document.querySelector("#choices");
var dashboard = document.querySelector("#dashboard");
var timeRemaining = 75 
var isAllDone = false;
var highscores = 0;
var clockId

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

//time remaining countdown
function countDown(){
    timeEl.textContent=timeRemaining
    timeRemaining--
}


// Start button, sets clock
function startGame(){
    introductionEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    clockId=setInterval(countDown, 1000);
}

startBtn.addEventListener("click", startGame);
