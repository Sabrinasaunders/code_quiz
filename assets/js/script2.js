var questions = [
    {
prompt: "Commonly used data types do not include",
choices: [
    "alerts",
    "string", 
    "boolean", 
    "numbers" ],
correctAnswer:"alerts",
 },

{
prompt: "The condition in an if / else statement is enclosed with _____.",
choices: 
   [ "curly brackets",
    "quotes",
    "parenthesis",
    "square brackets"],
correctAnswer:"parenthesis",
 },

 {
prompt: "Arrays in Javascript can be used to store ____.",
choices: 
   [ "numbers and strings",
    "booleans",
    "other arrays",
    "all of the above"],

correctAnswer: "all of the above",   
 },

 {
prompt: "String values must be enclosed within ____ when being assigned to variables.",
choices:[
    "curly brackets",
    "quotes",
    "parenthesis",
    "commas"
],
correctAnswer: "quotes",
 },

 {
prompt: "A very useful tool used during developement and debugging for printing content to th debugging for printing content to the debugger is:",
choices:
   [ "terminal/bash",
    "JavaScript",
    "console.log",
    "for loops" ],
correctAnswer: "console.log",
 },

]

var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var optionsEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startQuizBtn = document.querySelector("#start-quiz-button");
var responseEl = document.querySelector("#response");
var nameEl = document.querySelector("#name");
var reStartBtn = document.querySelector("#restart");

// Quiz initial interface

var currentQIndex = 0;
var time = questions.length * 15;
var timerId;

// The front page no longer shows and the quiz has started

function quizStart() {
    timerId = setInterval(tickTock, 1000);
    timerEl.textContent = time;
    var interfaceEl = document.getElementById("start-screen");
    interfaceEl.setAttribute("class", "conceal");
    questionsEl.removeAttribute("class");
    viewQuestion();
}

// Array of questions/answers and there is a choice list with buttons 

function viewQuestion() {
    var currentQ = questions[currentQIndex];
  var promptEl = document.getElementById("question-words")
    promptEl.textContent = currentQ.prompt;
    optionsEl.innerHTML = "";
    currentQ.choices.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = selectQ;
        optionsEl.appendChild(choiceBtn);
    });
}

// Respond with right answer and wrong answer subtracts time from the clock, then go to next question

function selectQ() {
    if (this.value !== questions[currentQIndex].correctAnswer) {
      time -= 10;
      if (time < 0) {
        time = 0;
      }
      timerEl.textContent = time;
      responseEl.textContent = `Incorrect! The correct answer was ${questions[currentQIndex].correctAnswer}.`;
      responseEl.style.color = "red";
    } else {
      responseEl.textContent = "Correct!";
      responseEl.style.color = "green";
    }
    responseEl.setAttribute("class", "response");
    setTimeout(function() {
      responseEl.setAttribute("class", "response hide");
    }, 2000);
    currentQIndex++;
    if (currentQIndex === questions.length) {
      quizFinish();
    } else {
      viewQuestion();
    }
}

// The timer stops, final score page is shown

function quizFinish() {
    clearInterval(timerId);
    var finishScreenEl = document.getElementById("quiz-finish");
    finishScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "conceal");
    
}

// If the time reaches 0, the quiz will finish.

function tickTock() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizFinish();
      //wordBlank.textContent = "Your time is up!";
    }
}

// The local storage will save the users score

function saveHighscore() {
    var name = nameEl.value.trim();
    if (name !== "") {
      var scoreboard =
        JSON.parse(window.localStorage.getItem("scoreboard")) || [];
      var newScore = {
        score: time,
        name: name
      };
      scoreboard.push(newScore);
      window.localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
    }
}

// when enter is pressed, users score is saved

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
}
nameEl.onkeyup = checkForEnter;

// the users score is saved when submit button is pressed

submitBtn.onclick = saveHighscore;

// when clicking the start button, the quiz will start.

startQuizBtn.onclick = quizStart;