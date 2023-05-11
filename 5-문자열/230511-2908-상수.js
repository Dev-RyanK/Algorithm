// const input = require("fs").readFileSync("/dev/stdin").toString().trim()

const input = `221 231`

const str = Array.from(input).reverse().join("").split(" ")

const a = str[0]
const b = str[1]

if (a > b) {
  console.log(a)
} else if (a < b) {
  console.log(b)
} else {
  console.log(a)
}
