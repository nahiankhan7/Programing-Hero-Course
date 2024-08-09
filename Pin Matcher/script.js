const generatePinInput = document.getElementById("generatePinInput");
const generatePinButton = document.getElementById("generatePinButton");

// generate 4 digit pin
generatePinButton?.addEventListener("click", () => {
  let randomNumber = Math.floor(1000 + Math.random() * 9000);
  randomNumber = randomNumber.toString();

  generatePinInput.value = randomNumber;
});

// calculator button handler
const calcInput = document.getElementById("calcInput");
const buttons = document.querySelectorAll(".button");
const submitButton = document.getElementById("submitButton");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let buttonValue = e.target.innerHTML;

    if (buttonValue === "C") {
      string = "";
      calcInput.value = string;
    } else if (buttonValue === "&lt;") {
      string = string.slice(0, -1);
      calcInput.value = string;
    } else {
      string += buttonValue;
      calcInput.value = string;
    }
  });
});

// pin match submit button handler
submitButton?.addEventListener("click", function () {
  const doneMessage = document.getElementById("doneMsg");
  const errorMessage = document.getElementById("errorMsg");
  const pin = document.getElementById("generatePinInput").value;
  const typePin = document.getElementById("calcInput").value;

  if (pin === typePin) {
    doneMessage.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    doneMessage.style.display = "none";
  }
});
