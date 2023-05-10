// let input = require("fs").readFileSync("/dev/stdin").toString().split('\n')

let org = `2\n3 ABC\n5 /HTP`

let input = org.split("\n")
const T = input[0]

for (i = 1; i <= T; i++) {
  const testcase = input[i].split(" ")
  const R = parseInt(testcase[0])
  const P = testcase[1].split("")
  // console.log(P[R[0]].repeat(3))
  console.log(P[0].repeat(3))
}

// 푸는 중
