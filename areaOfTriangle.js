const triangleBase = document.querySelector("#triangle-base");
const triangleHeight = document.querySelector("#triangle-height");
const btnSubmit = document.querySelector("#btn-submit");
const output = document.querySelector("#output");

function calculateArea() {
  const b = Number(triangleBase.value);
  const h = Number(triangleHeight.value);

  if (b <= 0 || h <= 0) {
    output.innerText = "Please enter valid lengths!";
    return;
  }

  const areaOfTriangle = (b * h) / 2;
  output.innerText = `Area of Triangle is ${areaOfTriangle} square units`;
}

btnSubmit.addEventListener("click", calculateArea);
