const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const output = document.querySelector("#output");

correctAnswers = ["90°", "right-angled"];

function calculateScore() {
  let score = 0;
  let i = 0;
  const formData = new FormData(quizForm);
  for (let value of formData.values()) {
    if (value === correctAnswers[i]) {
      score += 1;
    }
    i += 1;
  }
  output.innerText = "Your score is: " + score;
}
btnSubmit.addEventListener("click", calculateScore);
