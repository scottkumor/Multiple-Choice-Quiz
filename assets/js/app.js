
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
      title: "In the HTML document, what tag establishes the link to your JavaScript file?",
      choices: ["<js>", "<script>", "<javascript>", "<app>"],
      answer: "<script>"
   },
   {
      title: "How do you create a function?",
      choices: ["function: myFunction()", "function = myFunction()", "myFunction(function)", "function myFunction()"],
      answer: "function myFunction()"
   },
   {
      title: "Which of these choices correctly starts a FOR loop?",
      choices: ["for (i=0, i<10, i++)", "for (i=0 && i<10; i++)", "for (i=0; i<10; i++)", "for (i=10, i<10, i++)"],
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
];

function highScores() {

  primaryTextBox.innerHTML="Inject Score Here";
  primaryTextBox.setAttribute("class", "bgc-db bdr-a c-dm fs-j p-s ta-c v-v");

   secondaryBtn.setAttribute("class", "v-h");
   secondaryTextBox.setAttribute("class", "v-h");

   tertiaryBtn.setAttribute("class", "v-h");
   tertiaryTextBox.setAttribute("class", "v-h");

  

   primaryBtn.setAttribute("class", "bdc-n bdr-a bgc-lp-fc bgc-fm-hv bgc-lm c-db c-dp-hv c-db-fc m-s p-s v-v");
   primaryBtn.setAttribute("id", "primaryBtn");
   primaryBtn.setAttribute("onclick", "initialize()");
   primaryBtn.innerHTML = "Return to Start";
  
   
   scoresList.setAttribute("class", "bgc-db bdr-a c-fm fs-j lsp-i p-s ta-c v-v");
   score1.setAttribute("class", "ta-c v-v");
   score2.setAttribute("class", "ta-c v-v");
   score3.setAttribute("class", "ta-c v-v");

 }

function initialize() {

   primaryBtn.innerHTML = "View High Scores";
   primaryBtn.setAttribute("class", "bdc-n bdr-a bgc-lp-fc bgc-fm-hv bgc-lm c-db c-dp-hv c-db-fc m-s p-s v-v");
   primaryBtn.setAttribute("onclick", "highScores()");

   secondaryBtn.innerHTML = "Start Quiz!";
   secondaryBtn.setAttribute("class", "bdc-n bdr-a bgc-m bgc-lp-fc bgc-fm-hv c-db c-dp-hv fs-j m-s p-s v-v");
   secondaryBtn.setAttribute("onclick", "quizLoad()");

   primaryTextBox.innerHTML = "Welcome! This is a simple 6 question JavaScript Quiz. You have 60 seconds to complete 6 questions.";
   primaryTextBox.setAttribute("class", "bgc-db bdr-a c-dm fs-j p-s ta-c v-v");

   secondaryTextBox.innerHTML = "Click the Start Button to begin! Good Luck!"
   secondaryTextBox.setAttribute("class", "bgc-db bdr-b c-dm fs-j p-s ta-c v-v");

   tertiaryBtn.setAttribute("class", "v-h");
   tertiaryTextBox.setAttribute("class", "v-h");

   scoresList.setAttribute("class", "v-h");
   score1.setAttribute("class", "v-h");
   score2.setAttribute("class", "v-h");
   score3.setAttribute("class", "v-h");

};


function quizLoad() {

   var secondsLeft = 1;
   var startQuestion = 0;


   primaryBtn.setAttribute("class", "v-h");
   secondaryBtn.setAttribute("class", "v-h");
   primaryTextBox.innerHTML = "";
   tertiaryTextBox.setAttribute("class", "bgc-db bdr-a c-dm fs-l m-s p-m ta-c v-v")

   secondaryTextBox.innerHTML = secondsLeft;

   scoresList.setAttribute("class", "v-h");


   function renderQuestion(index) {
      return questions[index].title;
   };

   function renderChoices(index) {
      tertiaryTextBox.innerHTML = '';

         for (i = 0; i < questions[index].choices.length; i++) {
            var choiceBtn = document.createElement('button');
            tertiaryBtn.innerHTML = "Next Question";
            tertiaryBtn.setAttribute("class", "bdc-n bgc-dm bdr-a c-db fs-l m-s p-s ta-c v-v")
            choiceBtn.setAttribute("class", " bgc-fp bgc-lm-fc bgc-lp-hv c-dp c-db-hv fs-l ta-c v-v");
            choiceBtn.textContent = questions[index].choices[i];
            tertiaryTextBox.appendChild(choiceBtn);
         };
         if (i > questions[index].choices.length) {
            tertiaryTextBox.removeChild(choiceBtn);
         }
      
   };


   tertiaryBtn.addEventListener('click', function () {
      startQuestion++;
      /* call redner question */
      primaryTextBox.innerHTML = renderQuestion(startQuestion);
      renderChoices(startQuestion);
   });

   var timer = setInterval(function () {
      secondsLeft--;
      if (secondsLeft >= -2 && secondsLeft < 0) {
         secondaryTextBox.innerHTML = 'TIME!';
      } else if (secondsLeft < -2) {
         secondaryTextBox.innerHTML = 'TIME!';
         highScores();
         clearInterval(timer);
      } else {
         secondaryTextBox.innerHTML = secondsLeft;
      };
      return secondsLeft;
   }, 1000);


   // init
   primaryTextBox.innerHTML = renderQuestion(startQuestion);
   renderChoices(0);


   };

// events left
// choose answer, enter initials and submit to local storage and 
// writes it to the high score page *same as clicking high score link, clear high scores
//high score page: find object in local storage, display it, parse object for screen, display parsed object in html

//start quiz: vars ?'s, choices, and answers as strings in an array, key as an id storage maybe
//var score
