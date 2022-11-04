// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = require('fs').readFileSync(__dirname + '\\ex.txt').toString().split('\n')

let n = input[1].split(' ')
let v = input[2]
let count = 0

for (num of n) {
  if (num === v) {
    count++
  }
}
console.log(count)