const fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n').map(x => Number(x))

let max = input[0]
let maxIdx = 0

for (i = 0; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i]
    maxIdx = i
  }
}

// let max = Math.max(...input)
console.log(max);
console.log(maxIdx + 1);

// 왜 틀렸을까 대체~~