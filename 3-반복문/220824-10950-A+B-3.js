const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let output = input[i].split(' ');

  console.log(Number(output[0]) + Number(output[1]));
}