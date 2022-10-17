// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let input = require('fs').readFileSync(__dirname + '\\ex.txt').toString().split('\n')

for (let i = 1; i <= input[0]; i++) {

  let sum = 0
  let count = 0
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      count++
    } else {
      count = 0
    }
    sum += count
  }
  console.log(sum);
}