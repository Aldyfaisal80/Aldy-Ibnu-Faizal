// file - script.js

// Clearing the display section
function clearResult() {
  document.getElementById("result").
  value = "";
}

// The user input
function appendCharacter(char) {
  document.getElementById("result").
  value += char;
}

// Performing the calculations
function calculateResult() {
  let result = 
      document.getElementById("result").value;
  try {
      result = eval(result);
      document.getElementById("result").
      value = result;
  } catch (error) {
      document.getElementById("result").
      value = "Error";
  }
}