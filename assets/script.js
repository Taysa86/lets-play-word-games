// Button to begin the game
var generateBtn = document.querySelector("#Start")

//Variables
var response = [];
var seconds = 60;
var timededuct = 0;
var currentquestion = 0;
//Questions
var questionBank = 
    [{
      Question:"Test question 1?",
      Answer:"A" ,
      options: 
        {
        A: "correct",
        B: "incorrect",
        C: "incorrect",
        D: "incorrect",
        }  
      },
      {
      Question:"Test question 2?",
      Answer:"B" ,
      options: 
        {
        A: "incorrect",
        B: "correct",
        C: "incorrect",
        D: "incorrect",
        }  
      },
      {
      Question:"Test question 3?",
      Answer:"C" ,
      options: 
        {
        A: "incorrect",
        B: "incorrect",
        C: "correct",
        D: "incorrect",
        }  
      },
      {
      Question:"Test question 4?",
      Answer:"D" ,
      options: 
        {
        A: "correct",
        B: "incorrect",
        C: "incorrect",
        D: "incorrect",
        }  
      },
     ]

// Game functions
//funtion makes the question box appear once game starts
var showQuestion = function (questionIndex) {
    document.getElementById('questionText').textContent = questionBank[questionIndex].Question;
    document.getElementById('optionA').textContent = questionBank[questionIndex].Options.A;
    document.getElementById('optionB').textContent = questionBank[questionIndex].Options.B;
    document.getElementById('optionC').textContent = questionBank[questionIndex].Options.C;
    document.getElementById('optionD').textContent = questionBank[questionIndex].Options.D;
    console.log(questions[questionIndex]);

    

    }






// Add event listener to start button
generateBtn.addEventListener("click", showQuestion)