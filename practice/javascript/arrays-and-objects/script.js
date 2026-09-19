// Day 6 of JavaScript: arrays, array methods, and objects

let fruits = [];
console.log(fruits);

fruits.push("Apple");
fruits.push("Mango");
fruits.push("Banana");
fruits.push("Orange");
fruits.push("Kiwi");
fruits.push("PineApple");
console.log(fruits);

console.log(fruits.shift());          // removes and returns "Apple"
console.log(fruits);

console.log(fruits.unshift("Coconut", "Watermelon"));
console.log(fruits);

// objects
const human = {
  fName: "Kiran",
  rollNumber: 30,
  eyesColor: "Black",
  education: "Intermediate",
  age: 19,
  weight: 42,
};

console.log(human["fName"]);
console.log(human.fName);
console.log(human);

let fruit = {
  name: "Mango",
  color: "Yellow",
  size: "Big",
  taste: "Sweet",
  quantity: 12,
};
console.log(fruit);
fruit.quantity = 21;
console.log(fruit);
