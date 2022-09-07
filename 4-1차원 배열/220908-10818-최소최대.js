// 5
// 20 10 35 30 7
// -----
const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')
const count = input[0]
const num = input[1].split(' ').map(x => Number(x)) // split 된 각각을 숫자로 바꿔줌

let max = num[0]
let min = num[0]

for (let i = 1; i < count; i++) {
  if (max < num[i]) {
    max = num[i] // index에 해당하는 숫자로 바꾸기 위해 바뀌는 수 num에도 인덱스를 넣어준다
  }
  if (min > num[i]) {
    min = num[i]
  }
}

console.log(`${min} ${max}`);