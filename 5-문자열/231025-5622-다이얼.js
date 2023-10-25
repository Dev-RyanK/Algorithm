// let input = require("fs").readFileSync("/dev/stdin").toString()
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()

let count = 0

const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
}

// input의 길이만큼 반복
for (let i = 0; i < input.length; i++) {
  // dial의 길이만큼 반복
  for (let x in dial) {
    // for~in : 객체의 키를 반복 / input string 자체의 인덱스를 지정
    if (x.includes(input[i])) {
      // 키에 해당하는 값을 더함
      count += dial[x]
    }
  }
}

console.log(count)
