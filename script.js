const display = document.getElementById("display")
const buttons = document.querySelectorAll(".btn")
const clear = document.getElementById("clear")
const equals = document.getElementById("equals")

let currentInput = ""

buttons.forEach((btn) => {
  const value = btn.getAttribute("data-value")

  if (value) {
    btn.addEventListener("click", () => {
      currentInput += value
      display.value = currentInput
    })
  }
})

clear.addEventListener("click", () => {
  currentInput = ""
  display.value = ""
})

equals.addEventListener("click", () => {
  try {
    const result = eval(currentInput)
    display.value = result
    currentInput = result.toString()
  } catch (error) {
    display.value = "Error"
    currentInput = ""
  }
})
