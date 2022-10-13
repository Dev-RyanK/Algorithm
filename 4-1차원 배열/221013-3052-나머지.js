const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')

// console.log(input);
let temp = 0
for (i = 0; i < 10; i++) {
  // let remainder = input[i] % 42
  if (input[i] % 42 !== input[i + 1] % 42) {
    temp += 1
  }
}
console.log(temp);
