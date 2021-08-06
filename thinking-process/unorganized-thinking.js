// When game is over, 'end result' submit form and button to 'submit.'
// "<form> element with textContent Enter Initials: and an input spot for initials";
// "<button> element to submit";

//Store the score of the player (remaining time) and their initials (input value)
localStorage.setItem();

// //Each question is its own object with the properties 'question:' 'wrongAnswer1:' 'wrongAnswer2:' 'wrongAnswer3:' and 'rightAnswer:'

// var question1 = {
//   question: "What is the graph of a quadratic function called?",
//   incorrectAnswers: ["line", "V", "integral"],
//   correctAnswer: "parabola",
// };

// var question2 = {
//   question: "What does the quadratic formula solve for?",
//   incorrectAnswers: ["(x,y)", "the vertex", "y-intercept"],
//   correctAnswer: "x-intercepts",
// };

//Multiple choice options as list elements.  Each incorrect answer should have a value of false
// ("<li> elements");

//Timer needs to start at 120 seconds and count down one second at a time.  If a answer is incorrect, the timer must decrease by 10 seconds and continue counting down.

// var startTime = 20;
// var accessTimerText = document.querySelector("#timer");

// var timer = setInterval(function countDown() {
//   currentTime = startTime--;
//   if (currentTime > 15) {
//     accessTimerText.textContent = currentTime;
//   }
//   if (currentTime === 15) {
//     currentTime = currentTime - 10;
//     accessTimerText.textContent = currentTime;
//   }
//   if (currentTime === 0) {
//     clearInterval(timer);
//   }
// }, 1000);

//Cycle through questions...for loop??

// while (timeRemaining !== 0) {
//   for (var q = 1; q <= 10; q++) {
//     nextQuestion(question + q);
//   }
// }

// html creating a form for user initials
{
  /* <form id = "form">
<label for = "initials"></label>
<input type = "text" id = "initials" name = "userInitials">

</form> */
}

//highscores link should work from any page....
highscoresLinkEl.on("click", showHighscores);

//All buttons in one variable
var answerBtns = [answerBtn1, answerBtn2, answerBtn3, answerBtn4];

//Console log the array of buttons.
console.log(answerBtns);

//On click, set value then run next question function (with buttons in one variable).
var answerBtn1Clicked = answerBtns[0].on(
  "click",
  setValue(answerBtn1, 0),
  nextQuestion
);
var answerBtn2Clicked = answerBtns[1].on(
  "click",
  setValue(answerBtn2, 1),
  nextQuestion
);
var answerBtn3Clicked = answerBtns[2].on(
  "click",
  setValue(answerBtn3, 2),
  nextQuestion
);
var answerBtn4Clicked = answerBtns[3].on(
  "click",
  setValue(answerBtn4, 3),
  nextQuestion
);

//Console log value of individual buttons (which are comined in the same variable).
console.log(answerBtns[0][0].value);
console.log(answerBtns[1][0].value);
console.log(answerBtns[2][0].value);
console.log(answerBtns[3][0].value);

//Console log individual button objects.
console.log(answerBtn1);

//Attempting to create a function to check answer.
function checkAnswer() {
  console.log(answerBtns[0][0].value);
  console.log(answerBtns[1][0].value);
  console.log(answerBtns[2][0].value);
  console.log(answerBtns[3][0].value);
  if (answerBtn1[0].value == questions[currentIndex].correctAnswerIndex) {
    console.log("button1 right");
  }
  if (answerBtn2[0].value == questions[currentIndex].correctAnswerIndex) {
    console.log("button2 right");
  }
  if (answerBtn3[0].value == questions[currentIndex].correctAnswerIndex) {
    console.log("button3 right");
  }
  if (answerBtn4[0].value == questions[currentIndex].correctAnswerIndex) {
    console.log("button4 right");
  }
}
checkAnswer();
