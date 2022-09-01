const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n');

let total = +input[0]; //+의 의미는? --> '이것은 숫자입니다'. Number를 써도 된다. Number가 아니었기 때문에 input과 비교할 수 없다
let count = +input[1];
let sum = 0;

// input.splice(0, 2) --> 앞의 두 개를 짜르고 바로 들어간다. 이 경우 i = 0 해도 됨

for (let i = 2; i <= count + 1; ++i) { //왜 전위++ ?
  newArr = input[i].split(' ').map(item => Number(item)); // let newArr -> let 생략 가능 //화살표 함수의 사용 이유? item의 사용법은?
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? 'Yes' : 'No');