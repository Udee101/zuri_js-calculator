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
  let a = document.getElementById('result').value;
  let b = eval(a);

  document.getElementById('result').value = b
}