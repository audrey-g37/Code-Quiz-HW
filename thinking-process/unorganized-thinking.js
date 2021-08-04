// When game is over, 'end result' submit form and button to 'submit.'
"<form> element with textContent Enter Initials: and an input spot for initials";
"<button> element to submit";

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
