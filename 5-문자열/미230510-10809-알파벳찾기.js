// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("")

let input = "baekjoon".trim().split("")

let S = Array.from(input)

let charArr = Array.from({ length: 26 }, (v, i) =>
  String.fromCharCode(i + 65).toLowerCase()
)

// charArr의 요소가 S에 있으면 위치를 출력
for (i = 0; i < S.length; i++) {
  // if (S[i] === charArr) {
  // console.log(S[i])
  // }
}

// 남의 풀이
// https://gurtn.tistory.com/48
/* const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" ")); */
