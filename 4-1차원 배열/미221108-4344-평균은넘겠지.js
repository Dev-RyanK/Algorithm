// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = require('fs').readFileSync(__dirname + '\\ex.txt').toString().split('\n')

for (let i = 1; i < Number(input[0]) + 1; i++) {
  let input2 = input[i].split(' ').map((x) => Number(x))
  let total = input[i][0]
  let scores = input2.splice(1, input2.length)
  let average = scores.reduce((prev, curr) => { return prev + curr }, 0) / total
  let result = ((scores.filter(score => score > average)).length / total * 100).toFixed(3)
  console.log(Number(result) + '%');
}

// 죄다 틀림ㅜㅜ왜지