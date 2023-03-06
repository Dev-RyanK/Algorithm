// 10분 소요
// const input = require("fs").readFileSync("/dev/stdin").toString().trim()
const input = require("fs")
  .readFileSync(__dirname + `\\ex.txt`)
  .toString()
  .trim()

// const input = " The first character is a blank"

const count = input === "" ? 0 : input.split(" ").length
console.log(count)
