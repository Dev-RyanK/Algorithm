const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ').trim().map(Number);
const input = fs.readFileSync(__dirname + '\\ex.txt', 'utf-8').toString().trim().split('\n').map(Number);

// if (input % 4==0 && (input % 400==0 || input % 100!==0)) {
//   console.log('1');
// } else {
//   console.log('0');
// }

// console.log((input % 4 == 0 && input % 400 == 0) || (input % 4 == 0 && input % 100 !==0) ? '1' : '0');

console.log((input % 4 == 0 && (input % 400 == 0 || input % 100 !==0)) ? '1' : '0');

// 조건을 잘못 이해해서 틀렸던 문제. 1)4의 배수이면서 (&&) 100의 배수가 아니어야 한다. 2)4의 배수이면서 400의 배수여야 한다. 이 두 가지를 OR(||)로 표기.