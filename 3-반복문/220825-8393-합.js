const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '\\ex.txt').toString();

let output = 1
for (let i = 1; i <= input; i++) {
  output += i
}