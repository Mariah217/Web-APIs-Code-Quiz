/*
step 1: display start page, title, paragraph and start button ✔️
step 2: timer will start when start button is clicked ✔️
step 3: create start button to start the game and timer, use addeventlistener, display question and 4 answer choices/buttons, start page is hidden, only display question page (after you select an answer, it will go to another page and hide previous question page) ✔️
step 4.: create if statement (if you answer question correctly, it will present another question and say "correct!")
step 5: create if statement (if you answer question incorrectly, deduct 10 seconds from timer and say "incorrect")
step 6: clear interval when all questions are answered (stop the clock)
step 7: when game is over "all done! your final score is ____." the time remaining on the clock is your final score.
step 8: create input textbox to insert initials at the end of the game
step 9: create view highscore in top left to view highscore (use local storage) show dashboard of all the highscores. When you click submit, should store initial and score in local storage.
*/

//variables
var highScoreEl = document.querySelector("#high-score");
var questionEl = document.querySelector("#question");
var questionContainerEL = document.querySelector("#question-container");
var answersEl = document.querySelector("#answers");
var introductionEl = document.querySelector("#introduction");
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector(".start-button");
var saveBtn = document.querySelector("#save");
var inputInitialsEl = document.querySelector("#input-intials");
var dashboardEl = document.querySelector("#dashboard");
var titleEl = document.querySelector("#title");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var score = 0;
var timeRemaining = 75;
var index = 0;
var clockId



var questions = [{
    prompt: "Commonly used data types DO NOT include: ",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    solution: "2"
},

{
    prompt: "The condition of an if/else statement is enclosed with___.",
    answer: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
    solution: "2"
},

{
    prompt: "Arrays in JavaScript can be used to store___.",
    answer: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
    solution: "3"
},

{
    prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: ["1. JavaScript", "2. Terminal/bash", "3. For loops", "4. Console.log"],
    solution: "3"
},

{
    prompt: "String values must be enclosed within___when being assigned to variables.",
    answer: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    solution: "2"
},
]

// time remaining countdown
function countDown() {
    timeEl.textContent = timeRemaining;
    timeRemaining--;
    if (timeRemaining < 0) {
        clearInterval(timeInterval);
        document.getElementById("time").innerHTML = "";
    }
}

//time remaining stops at 0
var timeInterval=setInterval(function() {
    if (timeRemaining === 0)
    // timeEl.textContent = '' ;
    clearInterval(timeInterval);
})


// Start button, sets clock
function startGame() {
    introductionEl.classList.add("hide");
    questionContainerEL.classList.remove("hide");
    answersEl.classList.remove("hide");
    clockId = setInterval(countDown, 1000);
    displayQuestions();
}

function displayQuestions() {
    questionEl.textContent = questions[index].title;
    answer1El.textContent = questions[index].answers[0];
    answer2El.textContent = questions[index].answers[1];
    answer3El.textContent = questions[index].answers[2];
    answer4El.textContent = questions[index].answers[3];
}

function nextQuestion() {
    index++;
    displayQuestions();
}


// saveBtn.addEventListener('click', function handleClick() {
//     inputInitialsEl += 'Appended text';
//   });

countDown();

answer1El.addEventListener("click", nextQuestion);
answer2El.addEventListener("click", nextQuestion);
answer3El.addEventListener("click", nextQuestion);
// answer4El.addEventListener("click",); //add function for input box

startBtn.addEventListener("click", startGame);
// highScoreEl.addEventListener("click", ) //complete after dashboard is complete