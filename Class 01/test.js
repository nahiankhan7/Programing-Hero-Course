const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    if (value === "=") {
      try {
        string = safeEval(string);
        inputBox.value = string;
      } catch {
        inputBox.value = "Error";
      }
    } else if (value === "AC") {
      string = "";
      inputBox.value = string;
    } else if (value === "DEL") {
      string = string.slice(0, -1);
      inputBox.value = string;
    } else {
      string += value;
      inputBox.value = string;
    }
  });
});

function safeEval(expr) {
  return Function('"use strict"; return (' + expr + ")")();
}
