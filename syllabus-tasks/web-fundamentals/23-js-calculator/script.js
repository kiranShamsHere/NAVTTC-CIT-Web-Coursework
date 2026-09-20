//ADDITION FUNCTION.......
function add() {
  let num1 = parseInt(document.getElementById("value1").value);
  let num2 = parseInt(document.getElementById("value2").value);
  const result = num1 + num2;
  document.getElementById("show-box").style.display = "block";
  document.getElementById("result").innerText = `The Result Is = ${result}`;
}

//SUBTRACTION FUNCTION.......
function sub() {
  let num1 = parseInt(document.getElementById("value1").value);
  let num2 = parseInt(document.getElementById("value2").value);
  const result = num1 - num2;
  document.getElementById("show-box").style.display = "block";
  document.getElementById("result").innerText = `The Result Is = ${result}`;
}

//MULTIPLICATION FUNCTION.......
function mul() {
  let num1 = parseInt(document.getElementById("value1").value);
  let num2 = parseInt(document.getElementById("value2").value);
  const result = num1 * num2;
  document.getElementById("show-box").style.display = "block";
  document.getElementById("result").innerText = `The Result Is = ${result}`;
}

//DIVISION FUNCTION........
function div() {
  let num1 = parseInt(document.getElementById("value1").value);
  let num2 = parseInt(document.getElementById("value2").value);
  const result = num1 / num2;
  document.getElementById("show-box").style.display = "block";
  document.getElementById("result").innerText = `The Result Is = ${result}`;
}

//REMINDER FUNCTION........
function rem() {
  let num1 = parseInt(document.getElementById("value1").value);
  let num2 = parseInt(document.getElementById("value2").value);
  const result = num1 % num2;
  document.getElementById("show-box").style.display = "block";
  document.getElementById("result").innerText = `The Result Is = ${result}`;
}
