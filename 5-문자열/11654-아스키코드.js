// const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim()

console.log(input.charCodeAt(0))

// 남의 풀이
console.log(input.charCodeAt())

// 남의 풀이2. 왜 이렇게 했을까?
let index = 0
const i = input.charCodeAt(index)
console.log(i)
