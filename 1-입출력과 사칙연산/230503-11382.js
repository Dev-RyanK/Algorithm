// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

const input = "77 77 7777".trim().split(" ")

// const A = parseInt(input[0])
// const B = parseInt(input[1])
// const C = parseInt(input[2])
const answer = input.reduce((p, c) => Number(p) + Number(c))

// console.log(A + B + C)
// console.log(answer[0] + answer[1] + answer[2])
console.log(answer)
