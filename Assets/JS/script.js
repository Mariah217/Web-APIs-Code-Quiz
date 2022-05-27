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
var dashboard = document.querySelector("#dashboard");
var titleEl=document.querySelector("#title");
var answer1El=document.querySelectorAll("#answer1");
var answer2El=document.querySelectorAll("#answer2");
var answer3El=document.querySelectorAll("#answer3");
var answer4El=document.querySelectorAll("#answer4");
var timeRemaining = 75 
var index=0;

var questions = [ {
    title: "question 1",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer"
},

{
    title: "question 2",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer"
},

{
    title: "question 3",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer"
},

{
    title: "question 4",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer"
},

{
    title: "question 5",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer"
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
    displayQuestions()
}

function displayQuestions(){
        titleEl.textContent=questions[index].title;
        answer1El.textContent=questions[index].answers[0];
        answer2El.textContent=questions[index].answers[1];
        answer3El.textContent=questions[index].answers[2];
        answer4El.textContent=questions[index].answers[3];
}

function nextQuestion(){
    index++
    displayQuestions()
}
answer1El.addEventListener("click", nextQuestion);
answer2El.addEventListener("click", nextQuestion);
answer3El.addEventListener("click", nextQuestion);
answer4El.addEventListener("click", nextQuestion);

startBtn.addEventListener("click", startGame);
