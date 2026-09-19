// Day 5 of JavaScript: while loops and functions

// 1. for loop with nested if-else grading logic
for (let index = 1; index <= 5; index++) {
  console.log("Hello! I am for loop", index);
  let a = 2, b = 3;
  let add = a + b, sub = a - b, mul = a * b, div = a / b;
  if (add > 20) {
    console.log("addition branch");
  } else if (sub < 20) {
    console.log("subtraction branch");
  } else if (mul >= 10) {
    console.log("multiplication branch");
  } else if (div <= 23) {
    console.log("division branch");
  } else {
    console.log("none matched");
  }
}
console.log("For loop ended.");

// 2. while loop, even/odd check per number
let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log("Happy =", num);
  } else {
    console.log("Sad =", num);
  }
  num++;
}
console.log("While loop ended.");

// 3. building a growing string of stars
let star = "*";
let i = 1;
while (i <= 5) {
  console.log(star);
  star += "*";
  i++;
}

// 4. functions
function greet() {
  return "SATURDAY";
}
console.log(greet());
alert(greet());
document.write(greet());
