// input
// 10 5
// 1 10 4 9 2 3 8 5 7 6
// ---
const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().trim().split('\n') // 줄로 기준으로 나눈다

let first = Number(input[0].split(' ')[1]) // 첫줄.split(' ')한 것 == [10, 5].[1] == [5]
let second = input[1].split(' ').map(x => Number(x)) // input[1] == 둘째줄.split(' ') == map을 통해 배열이 됨 [1, 10, 4, 9, 2, 3, 8, 5, 7, 6]

const answer = second.filter(v => first > v)
// second를 filter로 거른 것을 리턴 => 5 > second.filter 

console.log(answer.join(' ')) // ' '로 이어서 다 합친다