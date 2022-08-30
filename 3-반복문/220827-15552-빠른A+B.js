const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);