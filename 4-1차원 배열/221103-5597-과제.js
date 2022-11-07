// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x))
let input = require('fs').readFileSync(__dirname + '\\ex.txt').toString().split('\n').map(x => Number(x))
const student = Array.from({ length: 30 }, (v, i) => i + 1)

let result = student.filter((item) => !input.includes(item))

for (num of result) {
  console.log(num)
}