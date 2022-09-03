const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString()
const input = fs.readFileSync(__dirname + '\\ex.txt').toString()

let output = ''
let blank = '' // 선언해 준 다음에야 빈칸문자가 덧붙게 됨. 안 그러고 아래서 바로 ' ' 쓰면 계속 공백 처리
for (i = 1; i <= input; i++) {
  output += '*' // 별 찍기
  for (j = 0; j < input - i; j++) {
    blank += ' ' // 공백에 빈칸문자 더하기, input-i개 (첫줄은 4개)
  }
  console.log(blank + output); //한 줄씩 출력
  blank = '' // 다시 처음부터 input-i해서, 둘째줄이 3개가 되게 함. 기존 blank 값에 input-i 개를 더하는 걸 방지
}


// join 메서드 활용

let num = Number(input)
// 배열을 생성, fill 메서드로 공백을 채운다.
// [' ', ' ', ' ', ' ', ' ',]
let star = new Array(num).fill(' ')

// 인덱스의 마지막 값(여기선 인덱스4)부터 순서대로 star 배열에 넣는다
for (let k = num - 1; k >= 0; k--) { // k[5-1=4]
  star[k] = '*'
  console.log(star.join(''));
}


// repeat 메서드 활용
for (l = 1; l <= input; l++) {
  console.log(" ".repeat(input - l) + "*".repeat(l))
}