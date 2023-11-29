const display = document.getElementById("display");
const zero = document.getElementsByClassName("zero-button");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener('click', handleClick)
});
function handleEquals() {
  try {
    const result = math.evaluate(display.value);
  updateDisplay(result)
  }
  catch (error) {
    updateDisplay("Syntax Error!")
  }
}
function handleClear() {
  updateDisplay("");
}
function handleInput(value) {
  display.value += value;
}
function updateDisplay(value) {
  display.value = value;
}
function handleClick(e) {
  let buttonValue = e.target.textContent;
  console.log(buttonValue);
  switch(buttonValue) {
    case "=":
      handleEquals();
      break;
    case "AC": 
      handleClear();
      break;
    case "X":
      buttonValue = "*";
    default: 
      handleInput(buttonValue);
  }
}

