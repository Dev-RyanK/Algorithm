// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim()
  .split(" ")

console.log(input)
