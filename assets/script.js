// Button to begin the game
var generateBtn = document.querySelector("#Start")


//Questions
var questionBank = [
    {
        Question: 'Test question 1',
        Answer: 'A',
        Options: {
          A: 'correct',
          B: 'incorrect',
          C: 'incorrect',
          D: 'incorrect'
        }
      },
      {
        Question: 'Test question 2',
        Answer: 'B',
        Options: {
          A: 'incorrect',
          B: 'correct',
          C: 'incorrect',
          D: 'incorrect'
        }
      },
      {
        Question: 'Test question 3',
        Answer: 'C',
        Options: {
          A: 'incorrect',
          B: 'incorrect',
          C: 'correct',
          D: 'incorrect'
        }
        },
        {
         Question: 'Test question 4',
         Answer: 'D',
         Options: {
           A: 'incorrect',
           B: 'incorrect',
           C: 'incorrect',
           D: 'correct'
        }
      }
    ];

//Variables
var response = [];
var seconds = 60;
var timededuct = 0;
var currentquestion = 0;

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

function countDown() {
    var interval = setInterval(function () {
      console.log(timeToDeduct);
      if(timeToDeduct > 0) {
        seconds = seconds - (timeToDeduct + 1);
        timeToDeduct = 0;
      } else {
        --seconds;
      }; // decreasing the timer by 1 every second.
      document.getElementById('timeRemaining').textContent = seconds;
      if (seconds === 0 || currentQuestion === questions.length) {
        clearInterval(interval); // Once the time runs out this ends its intervals
        console.log("interval stopped");
        document.getElementById("countDown").style.display = 'none';
        document.getElementById("results").style.display = 'block';
        calculateResults();
      }
    }, 1000); // 1000 is telling the setInterval to run every 1 second
  }




// Add event listener to start button
generateBtn.addEventListener("click", showQuestion)

