const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().trim().split('\n')

/* // 틀린 코드
let temp = []
let tempCount = 0
for (i = 0; i < input.length; i++) {
  if (input[i] % 42 !== input[i + 1] % 42) {
    temp.push(input[i] % 42)
    temp.sort()
  }
  if (temp[i] !== temp[i + 1]) {
    tempCount += 1
  }
}
console.log(tempCount); */

// 내 코드
let output = []
for (i = 0; i < input.length; i++) {
  let remainder = input[i] % 42
  output.push(remainder)
}
const count = new Set(output).size

console.log(count);

// 배운 코드
const count2 = new Set(input.map(x => x % 42)).size
console.log(count2)