// Button to begin the game
var generateBtn = document.querySelector("#Start")

//Variables
var response = [];
var seconds = 60;
var timededuct = 0;
var current question = 0;
//Questions
var questionBank = 
    [{Q:"How do you indicate the start and end of a code block?",
      A:"{}" },

      {Q:"How do you create an array?",
       A:"[]"  },

      {Q:"question about javaScript",
       A:"answer about javaScript"}
    ]

// Game functions
var showQuestion = function (questionIndex) {
    document.getElementById('questionText') questions[questionIndex].Question
    document.getElementById('optionA').textContent
    console.log ("good")
    
    //for (var i = 0; i < questionBank.length; i++){
        console.log(questionBank[i].Q) 
        prompt(questionBank[i].Q)
    
    
    //console.log ("True")
    }

}




// Add event listener to start button
generateBtn.addEventListener("click", run)