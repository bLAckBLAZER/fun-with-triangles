
var angleInput = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");


function checkIsTriangle(){

    

    var sumOfAngles = 0
    for(let i=0; i<angleInput.length; i++){
        sumOfAngles += parseInt(angleInput[i].value);
    }

    if (sumOfAngles === 180){
        output.innerHTML = "It's a Triangle";

    }
    else{
        output.innerHTML = "NOT a Triangle";
    }
    // console.log(sumOfAngles);
}

btnCheck.addEventListener("click", checkIsTriangle);