
//Questions for test
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
  //variables for funtions
  var responses = [];
  var seconds = 60;
  var currentQuestion = 0;
  var timeToDeduct = 0;
  
  //function to reveal questions on timer start
  function showQuestion(questionIndex) {
    document.getElementById('questionText').textContent = questionBank[questionIndex].Question;
    document.getElementById('optionA').textContent = questionBank[questionIndex].Options.A;
    document.getElementById('optionB').textContent = questionBank[questionIndex].Options.B;
    document.getElementById('optionC').textContent = questionBank[questionIndex].Options.C;
    document.getElementById('optionD').textContent = questionBank[questionIndex].Options.D;
    console.log(questionBank[questionIndex]);
  }
  //function for countdown timer with notes for me to remember
  function countDown() {
    var interval = setInterval(function () {
      console.log(timeToDeduct);
      if(timeToDeduct > 0) {
        seconds = seconds - (timeToDeduct + 1);
        timeToDeduct = 0;
      } else {
        --seconds;
      }; // decreasing the timer by 1 every second. You could decrease it by more here with an if block if they get the question wrong.
      document.getElementById('timeRemaining').textContent = seconds;
      if (seconds === 0 || currentQuestion === questionBank.length) {
        clearInterval(interval); // Once the time runs out this ends its intervals
        console.log("interval stopped");
        document.getElementById("countDown").style.display = 'none';
        document.getElementById("results").style.display = 'block';
        calculateResults();
      }
    }, 1000); // 1000 is telling the setInterval to run every 1 second
  }
  //function to make sure the game registers the correct answers
  function checkAnswer(response, correctAnswer) {
    console.log(response);
    var wasCorrect = response === correctAnswer;
    // wasCorrect = true;
    // !wasCorrect = false; (! will flip the value)
    // Below will run if the answer is incorrect
    if(!wasCorrect) { 
      console.log('wrong answer');
      timeToDeduct += 5;
    }
    responses.push({response: response, wasCorrect: wasCorrect})
  }
  //function for score keeping
  function calculateResults() {
    var numberOfCorrectAnswers = 0;
    responses.forEach(function (response) {
      if(response.wasCorrect) {numberOfCorrectAnswers++};
    })
    document.getElementById("numberOfCorrect").textContent = numberOfCorrectAnswers;
  }
  //listner to start count down and reveal questions
  document.getElementById('startTimer').addEventListener('click', function () {
    document.getElementById("initialContent");
    showQuestion(currentQuestion);
    document.getElementById("countDown").style.display = 'block';
    countDown();
  });
  //listener for answering questions
  document.getElementById("questionBlock").addEventListener('click', function (event) {
    console.log(event);
    checkAnswer(event.target.value, questionBank[currentQuestion].Answer);
    currentQuestion++; 
    if (currentQuestion < questionBank.length) {
      showQuestion(currentQuestion);
    }
  })

  