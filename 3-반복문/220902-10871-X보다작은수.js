// input
// 10 5
// 1 10 4 9 2 3 8 5 7 6
// ---

const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().trim().split('\n') // 줄로 기준으로 나눈다

let first = input[0].split(' ').map(x => Number(x)) // 첫줄[0] 배열이 됨 [10, 5]
let second = input[1].split(' ').map(x => Number(x)) // 둘째줄[0] 배열이 됨 [1, 10, 4, 9, 2, 3, 8, 5, 7, 6]

const answer = []
for (i = 0; i < first[0]; i++) { // i < 첫째줄의 [0] == [10]
  if (first[1] > second[i]) { // 첫째줄의 [1] == [5] > second[i]
    answer.push(second[i])
  }
}

console.log(answer.join(' ')) // ' '로 이어서 다 합친다