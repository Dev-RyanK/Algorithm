// const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim()

// 알파벳 전체로 이루어진 배열을 만든다
const alphaArr = Array.from({ length: 26 }, (v, i) =>
  String.fromCharCode(i + 65).toLowerCase()
)

const result = []

// 알파벳 전체 길이만큼 반복
// input의 인덱스를 가지면 push 한다
for (i = 0; i < alphaArr.length; i++) {
  result.push(input.indexOf(alphaArr[i]))
}

console.log(result.join(" "))
