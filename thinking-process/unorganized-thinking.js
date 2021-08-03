// Adding the 'end result' submit form and button
"<form> element with textContent Enter Initials: and an input spot for initials";
"<button> element to submit";

//Multiple choice options
"<li> elements";

//Timer thoughts

var startTime = 20;
var accessTimerText = document.querySelector("#timer");

var timer = setInterval(function countDown() {
  currentTime = startTime--;
  if (currentTime > 15) {
    accessTimerText.textContent = currentTime;
  }
  if (currentTime === 15) {
    currentTime = currentTime - 10;
    accessTimerText.textContent = currentTime;
  }
  if (currentTime === 0) {
    clearInterval(timer);
  }
}, 1000);
