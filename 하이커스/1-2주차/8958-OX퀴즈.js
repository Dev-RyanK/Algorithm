// 18분 소요

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const input = require("fs")
  .readFileSync(__dirname + `\\ex.txt`)
  .toString()
  .split("\n")

/*   "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

  "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다. */

const T = input[0]
for (let i = 1; i <= T; i++) {
  let score = 0
  let totalScore = []
  const testCase = input[i]
  for (let j = 0; j < testCase.length; j++) {
    if (testCase[j] === "O") {
      score++
      totalScore.push(score)
    } else {
      score = 0
    }
  }
  let result = totalScore.reduce((a, c) => a + c, 0)
  console.log(parseInt(result))
}
