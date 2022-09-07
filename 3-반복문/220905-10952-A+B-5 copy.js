const fs = require('fs');
let input = fs
  // .readFileSync('/dev/stdin')
  .readFileSync(__dirname + '\\ex.txt')
  .toString()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  let A = parseInt(input[i].split(' ')[0]);
  let B = parseInt(input[i].split(' ')[1]);
  let result = A + B;

  if (result === 0) { // 0 0을 더한 부분이 나오면 반복을 빠져나옴
    break;
  } else { // 다른 경우 답을 출력
    console.log(result);
  }
}