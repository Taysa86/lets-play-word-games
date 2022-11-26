// Button to begin the game
var generateBtn = document.querySelector("#Start")

//Variables
var test = ""

//Questions
var questionBank = 
    [{Q:"How do you indicate the start and end of a code block?",
      A:"{}" },

      {Q:"How do you create an array?",
       A:"[]"  },

      {Q:"question about javaScript",
       A:"answer about javaScript"}
    ]
//var startGame = Game()

// Game function
var run = function () {
    console.log ("good")
    for (var i = 0; i < questionBank.length; i++){
        console.log(questionBank[i].Q)
    }

}




// Add event listener to start button
generateBtn.addEventListener("click", run)