/* let arr = [1, 3, 5, 7, 9, 20]
for (let i = 1; i < 908; i++) {
  console.log(20 + 11 * i)
} */
// 틀렸음! 끝자리 4 정도로 차이남
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

/* let compare = Array.from({ length: 30 }, (v, i) => String(i + 1))
let arr = []
for (let i = 0; i < compare.length; i++) {
  if (compare[i].length < 2) {
    arr.push(Number(compare[i]) * 2)
  } else {
    // length === 2
    for (let j = 0; j < compare[i].length; j++) {
      // compare[i].map((v, idx) => (compare[i].length - i) + idx)
      // compare[i] === ['10'] map ㅡ쓰려고 배열 선언함
      let test = new Array(compare[i]).map((v, idx) => v[idx] + v[idx - j])
      arr.push(Number(...test))
    }
  }
}

console.log(arr); */

/* 남의 답안 */

// 10001개의 false로 채운 배열 생성
let arr = Array(10001).fill(false)
// 전체 숫자
let n = 1
// 숫자가 만보다 작은 동안 돈다
while (n < 10000) {
  // 특정 인덱스의 요소를 true로 바꾼다
  // n+String(n)
  arr[n + (n + "").split("").reduce((a, c) => a + +c, 0)] = true
  n++
}
// 셀프넘버를 담을 빈 배열 선언
let r = []
arr.forEach((v, i) => {
  // 이전값이 아닐 때 현재값을 push
  if (!v) r.push(i)
})
//
console.log(r.slice(1).join("\n"))
