//display inputed values
function display(val) {
  document.getElementById('result').value+=val
}

//clear screen
function clearScreen() {
  document.getElementById('result').value = "";
}

//carry out calculations
function calculate() {
  let x = document.getElementById('result').value;
  let y = eval(x);

  document.getElementById('result').value = y
}