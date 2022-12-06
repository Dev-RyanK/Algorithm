// const input = require('fs').readFileSync(/dev/stdin).toString().split('\n')
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .split("\n")

// 응! 무슨 말인지 한 개도 모르겠다!
/* 남의 풀이 */

/* const fs = require("fs");
const [n] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000
`
)
  .trim()
  .split("\n"); */

let N = Number(n)

let count = 0

for (let i = 1; i <= N; i++) {
  let nArr = String(i)
  if (i < 100) {
    count++
    continue
  }
  let A = Number(nArr[0]) - Number(nArr[1])
  let B = Number(nArr[1]) - Number(nArr[2])
  if (A === B) {
    count++
  }
}

console.log(count)
