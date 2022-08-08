// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const chess = [1, 1, 2, 2, 2, 8];
let answer = input.map((i, index) => {
  return chess[index] - i;
})

console.log(...answer);


// 미루지 말고 하나하나 뜯어볼 것