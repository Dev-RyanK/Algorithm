// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let all = `5 4
1 2 3
3 4 4
1 4 1
2 2 2`

let input = all.split("\n")

const firstLine = input[0].split(" ")
const N = firstLine[0]
const M = firstLine[1]

const boxOne = []
const boxTwo = []
const boxThree = []
const boxFour = []
const boxFive = []

for (i = 1; i <= M; i++) {
  console.log(input[i].split(" "))
  boxOne.push(input[i][0])
}

console.log(boxOne)

// 풀이 https://arnopark.tistory.com/613
