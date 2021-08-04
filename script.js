var startBtn = $("#start-button");
var h1El = $("#main-text");
var pEl = $("#instructions");

var answerListEl = $("#answer-list");

var answerBtn1 = $("<button>");
var answerBtn2 = $("<button>");
var answerBtn3 = $("<button>");
var answerBtn4 = $("<button>");

var accessTimer = $("#timer");
var timer;

var userInputBox = $("#form");
var userInitials = "";

var currentIndex = -1;
var questions = [
  {
    question: "What is the graph of a quadratic function called?",
    possibleAnswers: ["line", "V", "integral", "parabola"],
    correctAnswer: "parabola",
  },
  {
    question: "What does the quadratic formula solve for?",
    possibleAnswers: [
      "a coordinate-pair",
      "the vertex",
      "y-intercept",
      "x-intercepts",
    ],
    correctAnswer: "x-intercepts",
  },
  {
    question: "Which is not an integer?",
    possibleAnswers: ["4", "-5", "1", "0.5"],
    correctAnswer: "0.5",
  },
];

startBtn.on("click", startQuiz);

function startQuiz(event) {
  event.preventDefault();
  startBtn.remove();
  pEl.hide();
  countdown();
  nextQuestion();
  answerListEl.append(answerBtn1);
  answerListEl.append(answerBtn2);
  answerListEl.append(answerBtn3);
  answerListEl.append(answerBtn4);
}

function nextQuestion() {
  currentIndex++;
  h1El.text(questions[currentIndex].question);
  answerBtn1.text(questions[currentIndex].possibleAnswers[0]);
  answerBtn2.text(questions[currentIndex].possibleAnswers[1]);
  answerBtn3.text(questions[currentIndex].possibleAnswers[2]);
  answerBtn4.text(questions[currentIndex].possibleAnswers[3]);
}

var answerOption1 = answerBtn1.on("click", answerClick);
var answerOption2 = answerBtn2.on("click", answerClick);
var answerOption3 = answerBtn3.on("click", answerClick);
var answerOption4 = answerBtn4.on("click", answerClick);

function answerClick(event) {
  event.preventDefault();
  if (timeRemaining === 0 || currentIndex === questions.length - 1) {
    endQuiz();
  } else {
    nextQuestion();
  }
}

function endQuiz() {
  accessTimer.remove();
  h1El.text("All Done!");
  answerListEl.hide();
  pEl.show().text("Your final score is " + timeRemaining + ".");
  pEl.append(userInputBox);
  userInitials;
}

var timeRemaining = 119;

function countdown() {
  timer = setInterval(function () {
    currentTime = timeRemaining--;
    if (currentTime >= 0) {
      accessTimer.text("Time: " + currentTime + " seconds");
    }
    if (currentTime === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
