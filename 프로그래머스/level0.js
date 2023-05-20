// 두 수의 연산값 비교하기
// return Math.max(Number(`${a}${b}`), 2*a*b

// 더 크게 합치기
/* function solution(a, b) {
  const a_str = a.toString()
  const b_str = b.toString()
  const ab = parseInt(a_str + b_str)
  const ba = parseInt(b_str + a_str)
  if (ab > ba) {
    return ab
  } else if (ab < ba) {
    return ba
  } else {
    return ab
  }
} 
// 남의 풀이
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))


*/

// 문자열 곱하기
/* function solution(my_string, k) {
  return my_string.repeat(k)
} */

// 문자 리스트를 문자열로 변환하기
/* function solution(arr) {
  let answer = arr.toString().split(",").join("")
  return answer
}

// 남의 풀이
return arr.join("")
*/

// 문자열 섞기
/* const str1 = "aaaaa"
const str2 = "bbbbb"

const arr = []
for (let i = 0; i < str1.length; i++) {
  const arr1 = Array.from(str1.split(""))
  const arr2 = Array.from(str2.split(""))
  arr.push(arr1[i])
  arr.push(arr2[i])
}

console.log(arr.toString().split(",").join(""))

- 남의 풀이
function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("")
} */

// 문자열 반복해서 출력하기
/* let input = "string 5".split(" ")

let str = input[0]
let n = Number(input[1])
console.log(str.repeat(n)) */

// [미] 소문자 바꿔서 출력하기
/* let input = "aBcDeFg"

for (let i = 0; i < input.length; i++) {
  if (input[i] !== input[i].toLowerCase()) {
    input[i] === input[i].toLowerCase()
  } else if (input[i] === input.toLowerCase()) {
    input[i] === input.toUpperCase()
  }
}
console.log(input) */

/* // [미] 문자열 겹쳐쓰기
const my_string = "He11oWor1d"
const overwrite_string = "lloWorl"
const s = 2

// 인덱스 s부터 overwrite 길이만큼을 바꾸고 뒷부분 남으면 그대로 남길 것

function solution(my_string, overwrite_string, s) {
  const front = my_string.substr(0, s) // s까지 자른 my_string
  const back = my_string.substr(s, overwrite_string.length)
  console.log(front)
  console.log(back)
}

solution(my_string, overwrite_string, s)
 */
