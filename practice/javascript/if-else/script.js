// Day 3 of JavaScript: if / else / else-if practice

// 1. simple equality check
let mobile = "iPhone";
if (mobile === "iPhone") {
  console.log("I have an iPhone");
}

// 2. even / odd check
let num = 23;
if (num % 2 === 0) {
  console.log(num, "is an even number");
} else {
  console.log(num, "is an odd number");
}

// 3. positive / negative check
let num2 = -12;
if (num2 >= 0) {
  console.log(num2, "is a positive number");
} else {
  console.log(num2, "is a negative number");
}

// 4. voting age check
let age = 15;
if (age >= 18) {
  console.log("Your age is", age, "- you can vote");
} else {
  console.log("Your age is", age, "- you cannot vote yet");
}

// 5. grading with else-if chain
let marks = 93;
if (marks < 50) {
  console.log("Marks:", marks, "- Fail");
} else if (marks < 80) {
  console.log("Marks:", marks, "- Passed");
} else {
  console.log("Marks:", marks, "- 1st position!");
}

// 6. multiple else-if branches
let vehicle = "Train";
if (vehicle === "Car") {
  console.log("It's too slow");
} else if (vehicle === "Train") {
  console.log("It's too long");
} else if (vehicle === "Aeroplane") {
  console.log("You can fly");
} else {
  console.log("You should walk on your feet");
}

// 7. course/teacher lookup
let course = "CIT";
if (course === "CIT") {
  console.log("Teacher: Sir Abrar Hussain");
} else if (course === "Graphic Design") {
  console.log("Course outline pending");
} else {
  console.log("Course not found");
}
