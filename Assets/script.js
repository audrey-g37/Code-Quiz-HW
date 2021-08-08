//STILL TO DO: local storage of correct answer; incorrect answer --> time deduction; local storage user initals and score; answer feedback upon answer click; add to css file to style; update README with pics; more comments describing functionality.

var startBtn = $("#start-button");
var h1El = $("#main-text");
var pEl = $("#instructions");
var answerListEl = $("#answer-list");
var answerFeedbackEl = $("#answer-feedback");
var highscoresLinkEl = $("#highscores");
var clearHighscoresBtn = $("<button>");
var retakeQuizBtn = $("<button>");

var answerBtn1 = $("<button>");
var answerBtn2 = $("<button>");
var answerBtn3 = $("<button>");
var answerBtn4 = $("<button>");

var accessTimer = $("#timer");
var timer;

var collectInitialsFormEl = $("<form>");
var collectInitialsLabelEl = $("<label>");
var collectInitialsInputEl = $("<input>");
var collectInitialsBtnEl = $("<button>");

var currentIndex = 0;
var questions = [
  {
    question: "What is the graph of a quadratic function called?",
    possibleAnswers: ["line", "V", "parabola", "integral"],
    correctAnswerIndex: 2,
  },
  {
    question: "What does the quadratic formula solve for?",
    possibleAnswers: [
      "x-intercepts",
      "a coordinate-pair",
      "the vertex",
      "y-intercept",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which is not an integer?",
    possibleAnswers: ["4", "-5", "1", "0.5"],
    correctAnswerIndex: 3,
  },
];

startBtn.on("click", startQuiz);

function startQuiz(event) {
  event.preventDefault();
  startBtn.remove();
  pEl.empty();
  countdown();
  nextQuestion();
  answerListEl.append(answerBtn1);
  answerListEl.append(answerBtn2);
  answerListEl.append(answerBtn3);
  answerListEl.append(answerBtn4);
}

function setValue(answerBtnClicked, valueToAssign) {
  answerBtnClicked.attr({ value: valueToAssign, class: "answerOptions" });
}

setValue(answerBtn1, 0);
setValue(answerBtn2, 1);
setValue(answerBtn3, 2);
setValue(answerBtn4, 3);

answerBtn1.on("click", checkAnswer);
answerBtn2.on("click", checkAnswer);
answerBtn3.on("click", checkAnswer);
answerBtn4.on("click", checkAnswer);

var answerOption1;
var answerOption2;
var answerOption3;
var answerOption4;

function checkAnswer() {
  if (currentIndex === questions.length) {
    endQuiz();
    clearInterval(timer);
    return;
  } else if ($(this)[0].value == questions[currentIndex].correctAnswerIndex) {
    answerFeedbackEl.text("Correct!");
  } else {
    answerFeedbackEl.text("Wrong Answer!");
  }
  currentIndex++;
  nextQuestion();
  return currentIndex;
}

function nextQuestion() {
  if (currentIndex === questions.length) {
    endQuiz();
    clearInterval(timer);
    return;
  }

  answerOption1 = questions[currentIndex].possibleAnswers[0];
  answerOption2 = questions[currentIndex].possibleAnswers[1];
  answerOption3 = questions[currentIndex].possibleAnswers[2];
  answerOption4 = questions[currentIndex].possibleAnswers[3];

  h1El.text(questions[currentIndex].question);
  answerBtn1.text(answerOption1);
  answerBtn2.text(answerOption2);
  answerBtn3.text(answerOption3);
  answerBtn4.text(answerOption4);
}
collectInitialsFormEl.attr("id", "form").text("Your Initials: ");
collectInitialsLabelEl.attr("for", "initials");
collectInitialsInputEl.attr({ type: "text", id: "initials" });
collectInitialsBtnEl.attr("id", "submit-button").text("Submit");

var collectUserInitials = collectInitialsFormEl.append(
  collectInitialsLabelEl,
  collectInitialsInputEl,
  collectInitialsBtnEl
);

var finalScore;

function endQuiz() {
  accessTimer.remove();
  h1El.text("All Done!");
  answerListEl.empty();
  answerFeedbackEl.empty();
  pEl.show().text("Your final score is " + timeRemaining + ".");
  pEl.append(collectUserInitials);
  finalScore = timeRemaining;
  return finalScore;
}

collectInitialsBtnEl.on("click", showHighscores);

var userInitials = "";

function showHighscores() {
  userInitials = collectInitialsInputEl.val();
  localStorage.setItem(userInitials, finalScore);
  collectUserInitials.empty();
  h1El.text("Check your ranking!");
  var listOfScores = $("<li>");
  for (var i = 0; i < localStorage.length; i++) {
    pEl
      .append(listOfScores)
      .text(
        localStorage.key(i) + " scored " + localStorage.getItem(userInitials, i)
      );
  }
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
      endQuiz();
    }
  }, 1000);
}
