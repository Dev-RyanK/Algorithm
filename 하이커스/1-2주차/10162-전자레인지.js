// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ')
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim();

const A = 300;
const B = 60;
const C = 10;

let T = input;
let countA = 0;
let countB = 0;
let countC = 0;

while (true) {
  if (T >= A) {
    T = T - A;
    countA++;
  } else break;
}

while (true) {
  if (T >= B) {
    T = T - B;
    countB++;
  } else break;
}

while (true) {
  if (T >= C) {
    T = T - C;
    countC++;
  } else break;
}

if (T === 0) {
  console.log(countA, countB, countC);
} else {
  console.log(-1);
}
