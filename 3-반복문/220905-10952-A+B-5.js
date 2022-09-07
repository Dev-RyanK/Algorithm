const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().trim().split('\n') // 줄로 기준으로 나눈다

// input의 길이를 범위로 쓰는 방법
for (i = 0; i < input.length - 1; i++) {
  let answer = input[i].split(' ').map(v => Number(v)) // split으로 나눈 각 값을 배열로 만들어줌?
  console.log(answer[0] + answer[1]);
}
// 00일 때 그만둬야 된다~는 조건이 들어가야 한다