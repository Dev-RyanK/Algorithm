const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')

for (i = 0; i < input.length - 1; i++) {
  const A = parseInt(input[i].split(' ')[0])
  const B = parseInt(input[i].split(' ')[1])
  console.log(A + B);
}

// for (i = 0; i < input.length - 1; i++) { // i==0,1,2,3,4, input.length == 5
//   let answer = input[i].split(' ')
//   console.log(Number(answer[0]) + Number(answer[1]))
// }