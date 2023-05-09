let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = input[0]

for (i = 1; i <= T; i++) {
  console.log(input[i][0] + input[i][input[i].length - 1])
}
