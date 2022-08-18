let fs = require('fs');
// let [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let input = fs.readFileSync(__dirname + '\\ex.txt').toString().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

if (a === b && b === c) {
  console.log(10000 + (a * 1000));
} else if (a === b || b === c) {
  console.log(1000 + (a * 100));
} else if (a === c) {
  console.log(1000 + (c * 100));
} else if (a !== b && b !== c && a !== c) {
  function max(array) {
    let output = array[0]
    for (const item of array) {
      if (output < item) {
        output = item
      }
      return output
    }
  }
  const testArray = [a, b, c];
  console.log(max(testArray) * 100) // [0]값이 나오고 있어서 다시 풀어볼 것
}