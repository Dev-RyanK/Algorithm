const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync(__dirname + '\\ex.txt').toString();

let num = 0;
for (let i = 1; i <= input; i++) {
  num += i
}

console.log(num);