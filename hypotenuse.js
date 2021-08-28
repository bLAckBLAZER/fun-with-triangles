const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const btnSubmit = document.querySelector("#btn-submit");
const output = document.querySelector("#output");

function calculateHypotenuse() {
  const a = Number(firstSide.value);
  const b = Number(secondSide.value);

  if (a === 0 || b === 0) {
    output.innerText = "Please enter valid lengths!";
    return;
  }

  var hypotenuse = Math.sqrt(a * a + b * b);
  hypotenuse = hypotenuse.toFixed(2);

  console.log(hypotenuse);
  output.innerText = `The length of hypotenuse is ${hypotenuse} units`;
}
btnSubmit.addEventListener("click", calculateHypotenuse);
