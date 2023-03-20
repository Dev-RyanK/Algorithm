// 30분 못 풀었음

// const input = require('fs').readFileSync('/dev/stdin').toString()

const input = require("fs")
  .readFileSync(__dirname + `\\ex.txt`)
  .toString()
  .trim()
  .split(`\n`)

// 소인수는 2,3,5
const T = parseInt(input[0])

for (let i = 1; i <= T; i++) {
  let numbers = input[i].split(" ")
  let A = parseInt(numbers[0])
  let B = parseInt(numbers[1])

  if (A % 2 < 2 && A % 2 !== 1) {
    console.log(A)
  }
}
