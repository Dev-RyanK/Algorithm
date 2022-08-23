let fs = require('fs');
// let [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let input = fs.readFileSync(__dirname + '\\ex.txt').toString().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

function max(array) {
  let output = array[0]
  for (const item of array) {
    if (output < item) {
      output = item
    }
  }
  return output
}

if (a === b && b === c) {
  console.log(10000 + (a * 1000));
} else if (a === b || b === c) {
  console.log(1000 + (b * 100));
} else if (a === c) {
  console.log(1000 + (c * 100));
} else {
  console.log(max([a, b, c]) * 100)
}