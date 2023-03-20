// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim()
  .split("\n")

let nameArr = []
for (let i = 0; i < input.length; i++) {
  if (input[i].match(/FBI/g)) {
    nameArr.push(i + 1)
  } else if (nameArr.length === 0) {
    nameArr.push("HE GOT AWAY!")
  }
}

console.log(nameArr.toString().split(",").join(" "))
