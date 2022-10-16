// https://www.acmicpc.net/problem/1546

let input = require('fs').readFileSync(__dirname + '\\ex.txt').toString().split('\n')
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let input2 = input[1].split(' ')
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
console.log(result);