const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n');

let total = +input[0]; //+의 의미는?
let count = +input[1];
let sum = 0;

for (let i = 2; i <= count + 1; ++i) { //왜 전위++ ?
  let newArr = input[i].split(' ').map(item => Number(item)); //화살표 함수의 사용 이유? item의 사용법은?
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? 'Yes' : 'No');