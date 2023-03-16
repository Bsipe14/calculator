function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a Number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The result(s) are " + number1 + " + " + number2 + " equals " + add(number1, number2) + " " + number1 + " - " + number2 + " equals " + subtract(number1, number2) + " " + number1 + " * " + number2 + " equals " + multiply(number1, number2) + " " + number1 + " / " + number2 + " equals " + divide(number1, number2));