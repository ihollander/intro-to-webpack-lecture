console.log("hey it's an app yay!!!")
console.log("1 + 2 is", calculate(1, 2, "+"))

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
  const num1 = parseInt(e.target.num1.value)
  const num2 = parseInt(e.target.num2.value)
  const operator = e.target.operator.value

  const result = calculate(num1, num2, operator)
  document.querySelector("#sum").textContent = result
})