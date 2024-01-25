//List of questions
var quizQuestions = [
    {
question: "Commonly used data types do not include",
choices: {
    A: "alerts",
    B: "string", 
    C: "boolean", 
    D: "numbers"
},
correctAnswer:"A",
 },

{
question: "The condition in an if / else statement is enclosed with _____.",
choices: {
    A: "curly brackets",
    B: "quotes",
    C: "parenthesis",
    D: "square brackets"
},
correctAnswer:"C",
 },

 {
question: "Arrays in Javascript can be used to store ____.",
choices: {
    A: "numbers and strings",
    B: "booleans",
    C: "other arrays",
    D: "all of the above"
},
correctAnswer: "D",   
 },

 {
question: "String values must be enclosed within ____ when being assigned to variables.",
choices: {
    A: "curly brackets",
    B: "quotes",
    C: "parenthesis",
    D: "commas"
},
correctAnswer: "B",
 },

 {
questions: "A very useful tool used during developement and debugging for printing content to th debugging for printing content to the debugger is:",
choices: {
    A: "terminal/bash",
    B: "JavaScript",
    C: "console.log",
    D: "for loops"
},
correctAnswer: "C",
 },

]

var startQuizButton = document.querySelector(".start-quiz-button");
var timer = document.querySelector(".timer");

var time;
var timerCount;


function startQuiz() {
timerCount = 30;
startQuizButton.disabled = true;
time = setInterval(function() {
    timerCount---;
timer.textContent = timerCont;
if (timerCount === 0) {
    clearInterval(timer);
    endQuiz();
}
}, 1000);

var beginScreen = document.getElementById("starter-screen");
}

var showQuestions


function endQuiz(){
    wordBlank.textContent = "Your time is up!";
    //*need to add the scoreboard....*
    startQuizButton.disabled = false;
}



