const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')

let total = input[0]
let sum = input[1]
let answer = 0;

for (i = 2; i < input[0]; i++) {
  let newArr = input[i].split(' ').map(item => Number(item)); //화살표 함수의 사용 이유? item의 사용법은?
  answer = newArr[0] + newArr[1];
}

console.log(answer);