var questionsAnswered = 0;
var hobbyTrackScore = 0;
var compTrackScore = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var reset = document.getElementById("restart");
reset.addEventListener("click", restartQuiz);

q1a1.addEventListener("click", comp);
q1a2.addEventListener("click", comp);
q1a3.addEventListener("click", hobby);
q1a4.addEventListener("click", hobby);

q2a1.addEventListener("click", comp);
q2a2.addEventListener("click", comp);
q2a3.addEventListener("click", hobby);
q2a4.addEventListener("click", hobby);

q3a1.addEventListener("click", comp);
q3a2.addEventListener("click", hobby);
q3a3.addEventListener("click", comp);
q3a4.addEventListener("click", hobby);

q4a1.addEventListener("click", hobby);
q4a2.addEventListener("click", comp);
q4a3.addEventListener("click", hobby);
q4a4.addEventListener("click", comp);

function comp() {
    compTrackScore += 1;
    questionsAnswered += 1;
  
    console.log("questionCount = " + questionsAnswered + "compScore = " + compTrackScore);

    if (questionsAnswered == 4) {
      console.log("The quiz is done!")
      updateResult();
    }
  }
  
  
  function hobby() {
     hobbyTrackScore += 1;
    questionsAnswered += 1;

    console.log("questionCount = " + questionsAnswered + "hobbyScore = " + hobbyTrackScore);
  
    if (questionsAnswered == 4) {
      console.log("The quiz is done!")
      updateResult();
    }
  }
  
  function updateResult() {
    if (compTrackScore > 2) {
      result.innerHTML = "You should learn Java or Python in order to compete!";
      console.log("You should learn Java or Python in order to compete!");
    }
    else if (hobbyTrackScore > 2) {
      result.innerHTML = "You should learn HTML/CSS or Python at your own pace.";
      console.log("You should learn HTML/CSS or Python at your own pace.");
    }
    else if (hobbyTrackScore == 2){
        result.innerHTML = "You should learn Java or Python in order to compete!"
        console.log("You should learn Java or Python in order to compete!")
    }
  }
  
  function restartQuiz(){
    result.innerHTML = "Your result is...";
    hobbyTrackScore = 0;
    compTrackScore = 0;
    questionsAnswered = 0;
  }