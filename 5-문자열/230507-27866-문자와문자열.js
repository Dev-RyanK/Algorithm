let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// let aaa = `Sprout\n3`
// let input = aaa.split("\n")
let i = input[1]

let result = input[0].split("")[i - 1]
console.log(result)
