// 입력
// -----
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// -----

const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')


const total = Number(input[0])

for (i = 1; i <= total; i++) {
  let num = input[i].split(' ')
  let answer = Number(num[0]) + Number(num[1])
  console.log(`Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${answer}`)
}