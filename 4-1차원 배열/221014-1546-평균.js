// https://www.acmicpc.net/problem/1546

let input = require('fs').readFileSync(__dirname + '\\ex.txt').toString().split('\n')
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

// 내 코드
/* let input2 = input[1].split(' ')
let M = Math.max(...input2)
let newScoreArray = []
for (i = 0; i < input2.length; i++) {
  let newScore = input2[i] / M * 100
  newScoreArray.push(newScore)
}
let total = newScoreArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)
let result = total / parseInt(input)
console.log(result); */


// 좋아보이는 남의 코드
const num = input[0] // 과목의 갯수
const score = input[1].split(' ')

const max = Math.max(...score) // score에서 최대값 추출
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += score[i] / max * 100 // 각 과목을 최대값으로 나누고 100을 곱한 값을 과목의 갯수만큼 전부 더함
}

console.log(sum / num);