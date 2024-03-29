const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const multiply = (num1, num2) => num1 * num2

const divide = (num1, num2) => num1 / num2

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return add(num1, num2)
    case "-":
      return subtract(num1, num2)
    case "*":
      return multiply(num1, num2)
    case "/":
      return divide(num1, num2)
    default:
      return ""
  }
}