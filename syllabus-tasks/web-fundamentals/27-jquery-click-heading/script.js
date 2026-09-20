for (let i = 5; i <= 15; i++) {
  document.getElementById("para1").innerHTML = i;
  // console.log(i);
}

let index = 5;
while (index <= 15) {
  document.getElementById("para2").innerHTML = index;
  index++;
}

let idx = 5;
do {
  document.getElementById("para3").innerHTML = idx;
  idx++;
} while (idx <= 15);
