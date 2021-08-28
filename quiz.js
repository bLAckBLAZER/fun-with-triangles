const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const output = document.querySelector("#output");

correctAnswers = ["90°", "right-angled", "3 sides, 3 angles", "Equilateral"];

function calculateScore() {
  let score = 0;
  let totalScore = correctAnswers.length;
  let i = 0;
  let count = 0;
  const formData = new FormData(quizForm);
  for (let value of formData.values()) {
    count += 1;
    if (value === correctAnswers[i]) {
      score += 1;
    }
    i += 1;
  }

  if (count < correctAnswers.length) {
    output.innerText = "Please answer every question";
  } else {
    output.innerText = `Your score is ${score} out of ${totalScore}`;
  }
}
btnSubmit.addEventListener("click", calculateScore);
