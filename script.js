var startBtn = $("#start-button");
var h1El = $("#quiz-questions");
var pEl = $("#quiz-answer-options");

var answerListEl = $("#answer-list");

var answerBtn1 = $("<button>");
var answerBtn2 = $("<button>");
var answerBtn3 = $("<button>");
var answerBtn4 = $("<button>");

var accessTimer = $("#timer");
var timer;

var questions = [
  (question0 = {
    question: "What is the graph of a quadratic function called?",
    possibleAnswers: ["line", "V", "integral", "parabola"],
    correctAnswer: "parabola",
  }),
  (question1 = {
    question: "What does the quadratic formula solve for?",
    possibleAnswers: [
      "a coordinate-pair",
      "the vertex",
      "y-intercept",
      "x-intercepts",
    ],
    correctAnswer: "x-intercepts",
  }),
  (question2 = {
    question: "Which is not an integer?",
    possibleAnswers: ["4", "-5", "1", "0.5"],
    correctAnswer: "0.5",
  }),
];

startBtn.on("click", startQuiz);

function startQuiz(event) {
  event.preventDefault();
  startBtn.remove();
  pEl.remove();
  countdown();
  nextQuestion(0);
  answerListEl.append(answerBtn1);
  answerListEl.append(answerBtn2);
  answerListEl.append(answerBtn3);
  answerListEl.append(answerBtn4);
}

function nextQuestion(q) {
  h1El.text(questions[q].question);
  answerBtn1.text(questions[q].possibleAnswers[0]);
  answerBtn2.text(questions[q].possibleAnswers[1]);
  answerBtn3.text(questions[q].possibleAnswers[2]);
  answerBtn4.text(questions[q].possibleAnswers[3]);
}

var answerOption1 = answerBtn1.on("click", answerClick);
var answerOption2 = answerBtn2.on("click", answerClick);
var answerOption3 = answerBtn3.on("click", answerClick);
var answerOption4 = answerBtn4.on("click", answerClick);

function answerClick(event) {
  event.preventDefault();
  nextQuestion(1);
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
