// let input = require("fs").readFileSync("/dev/stdin").toString().split('\n')
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .split("\n")

// 남의 풀이 + 내 거
// 배열 맨 앞의 요소를 제거하고 반환함 = 전체 인풋의 길이인 2
const T = input.shift()

for (i = 0; i < T; i++) {
  let result = ""
  // 각 인풋을 구조분해 할당
  const [num, str] = input[i].split(" ")
  result = str
    .split("")
    .map((x) => x.repeat(num))
    .join("")
  console.log(result)
}
