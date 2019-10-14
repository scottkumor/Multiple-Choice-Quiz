var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title:
      "In the HTML document, what tag establishes the link to your JavaScript file?",
    choices: ["js", "script", "javascript", "app"],
    answer: "script"
  },
  {
    title: "How do you create a function?",
    choices: [
      "function: myFunction()",
      "function = myFunction()",
      "myFunction(function)",
      "function myFunction()"
    ],
    answer: "function myFunction()"
  },
  {
    title: "Which of these choices correctly starts a FOR loop?",
    choices: [
      "for (i=0, i<10, i++)",
      "for (i=0 && i<10; i++)",
      "for (i=0; i<10; i++)",
      "for (i=10, i<10, i++)"
    ],
    answer: "for (i=0; i<10; i++)"
  },
  {
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onmouseclick", "onleftmouse", "onclick", "onmouse"],
    answer: "onclick"
  },
  {
    title: "How do you assign a variable a numerical value of 7?",
    choices: ["var = 7;", "var myVar = 7;", "var myVar: 7;", "myVar = 7;"],
    answer: "var myVar = 7;"
  },
  {
    title: "Where is the correct place to place to insert JavaScript in the HTML?",
    choices: ["the head", "the body", "the footer", "the head or the body"],
    answer: "the head or the body"
  },
  {
    title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script title=xxx.js>", "<script href=xxx.js>", "<script src=xxx.js>", "<script name=xxx.js>"],
    answer: "<script src=xxx.js>"
  },
  {
    title: "How do you write 'Hello World' in an alert box?",
    choices: ["alert('Hello World')", "alertBox('Hello World')", "msg('Hello World')", "msgBox('Hello World')>"],
    answer: "alert('Hello World')"
  },
  {
    title: "How do you call a function named 'myFunction'?",
    choices: ["call myFunction", "call function myFunction", "myFunction()", "call myFunction()"],
    answer: "myFunction()"
  },
  {
    title: "How to write an IF statement in JavaScript?",
    choices: ["if (i = 5) {}", "if (i == 5) {}", "if i == 5 {}", "if (i == 5) then {}"],
    answer: "if (i == 5) {}"
  },
  {
    title: "How to write an IF statement in JavaScript?",
    choices: ["if (i = 5) {}", "if (i == 5) {}", "if i == 5 {}", "if (i == 5) then {}"],
    answer: "if (i == 5) {}"
  }, 
];

var questionAnswer = '';
var questionNum = 0;
var score = 0;
var secondsLeft = 60;
var userGuess = '';
var finalQuestion = questions.length - 1;
var user = [];



function scoreStore() {
  
  var userInput = document.getElementById('inputId');
  user[user.length] = {
    name: userInput.value,
    value: score
  }; 
  localStorage.setItem("storage", JSON.stringify(user));
};

function renderScores() {
 
var userHighScore = JSON.parse(localStorage.getItem("storage"));

for (i=0; i<userHighScore.length; i++) {
 
  var userName = userHighScore[i].name;
  var userScore = userHighScore[i].value;
  var writeListItem = document.createElement("li");

  writeListItem.textContent = userName + ": " + userScore;
  document.getElementById('scoresList').appendChild(writeListItem);
  console.log(writeListItem);

  primaryTextBox.textContent = "Your Score: " + userScore;
};
};


function initialize() {
  primaryBtn.innerHTML = "View High Scores";
  primaryBtn.style.display = "block";
  primaryBtn.setAttribute("onclick", "highScores()");

  secondaryBtn.innerHTML = "Start Quiz!";
  secondaryBtn.style.display = "block";
  secondaryBtn.setAttribute("onclick", "quizLoad()");

  primaryTextBox.innerHTML = "Welcome! This is a simple 6 question JavaScript Quiz. You have 60 seconds to complete as many questions as you can!";
  primaryTextBox.style.display = "block";

  secondaryTextBox.innerHTML = "Click the Start Button to begin! Good Luck!";
  secondaryTextBox.style.display = "block";

  tertiaryBtn.style.display = "none";
  tertiaryTextBox.style.display = "none";

  scoresList.style.display = "none";

  inputId.style.display = "none";
  inputBtn.style.display = "none";
};

function highScores() {
  primaryTextBox.innerHTML = "Inject Score Here";
  primaryTextBox.style.display = "block";

  secondaryBtn.style.display = "none";
  secondaryTextBox.style.display = "none";

  tertiaryBtn.style.display = "none";
  tertiaryTextBox.style.display = "none";

  primaryBtn.style.display = "block";
  primaryBtn.setAttribute("id", "primaryBtn");
  primaryBtn.setAttribute("onclick", "initialize()");
  primaryBtn.innerHTML = "Return to Start";

  scoresList.style.display = "block";

  inputId.style.display = "block";
  inputBtn.style.display = "block";

  renderScores();

};

function grabValue(textContent) {
  userGuess = textContent;
};

function checkAnswer() {

  if (userGuess === questionAnswer) {
    score++;
    console.log(score);
  } 
  else if (userGuess !== questionAnswer) {
    // decrease 10 seconds of time
    secondsLeft -= 10;
  };
};

function timerRunner() {
  var timer = setInterval(function () {
    secondsLeft--;
    if (secondsLeft >= -2 && secondsLeft < 0) {
      secondaryTextBox.innerHTML = "TIME!";
      tertiaryTextBox.style.display = "none";
    } else if (secondsLeft < -2) {
      secondaryTextBox.innerHTML = "TIME!";
      highScores();
      renderScores();
      clearInterval(timer);
      secondsLeft = 60;
      tertiaryTextBox.style.display = "none";
    } else {
      secondaryTextBox.innerHTML = secondsLeft;
    }
    return secondsLeft;
  }, 1000);
};

function quizLoad() {

  timerRunner();

  primaryBtn.style.display = "none";
  secondaryBtn.style.display = "none";
  tertiaryTextBox.style.display = "block";
  scoresList.style.display = "none";
  primaryTextBox.innerHTML = "";
  secondaryTextBox.innerHTML = secondsLeft;
  inputId.style.display = "none";
  inputBtn.style.display = "none";

  function renderQuestion(index) {
    questionAnswer = questions[index].answer;
    return questions[index].title;
  }

  function renderChoices(index) {
    tertiaryTextBox.innerHTML = "";

    for (i = 0; i < questions[i].choices.length; i++) {
      var choiceBtn = document.createElement("button");

      choiceBtn.setAttribute("class", "bgc-fp bgc-lm-fc bgc-lp-hv c-dp c-db-hv fs-l ta-c");

      choiceBtn.setAttribute("id", "choiceBtn");
      choiceBtn.setAttribute("value", "choiceBtnValue");
      choiceBtn.setAttribute("onclick", "grabValue(this.textContent)");

      choiceBtn.textContent = questions[index].choices[i];
      tertiaryTextBox.appendChild(choiceBtn);
    };

    tertiaryBtn.innerHTML = "Next Question";
    tertiaryBtn.style.display = "block";
  };

  

  tertiaryBtn.addEventListener("click", function () {
    questionNum++;
    /* call redner question */
    primaryTextBox.innerHTML = renderQuestion(questionNum);
    renderChoices(questionNum);
  });

  // init
  primaryTextBox.innerHTML = renderQuestion(questionNum);
  renderChoices(0);
};