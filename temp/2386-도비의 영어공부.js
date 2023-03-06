// 14분 소요
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim()
  .split("\n")

// 각 줄에 하나의 소문자와 영어문장이 공백
// 입력의 마지막은 #
// 각 문장의 해당 소문자 알파벳을 대소문자 갯수 다 센다

for (let i = 0; i < input.length - 1; i++) {
  let alphabet = input[i][0]
  let sentence = input[i]
  let count = 0
  for (let j = 2; j < sentence.length; j++) {
    if (alphabet === sentence[j] || alphabet.toUpperCase() === sentence[j]) {
      count++
    }
  }
  console.log(`${alphabet} ${count}`)
}
