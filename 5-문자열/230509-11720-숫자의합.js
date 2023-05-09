let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let sum = Array.from(input[1].split("").map((x) => Number(x)))

let answer = sum.reduce((p, c) => p + c, 0)

console.log(answer)
