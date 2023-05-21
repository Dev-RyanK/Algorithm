// [미] 원소들의 곱과 합
/* let arr = [3, 4, 5, 2, 1]
let arr2 = [5, 7, 8, 3]

let multiple = arr2.reduce((p, c) => console.log(p * c), Math.min(...arr2))
let square = arr2.reduce((p, c) => p + c, Math.min(...arr2)) ** 2

console.log(multiple, square)
console.log(5 * 7 * 8 * 3) */

// [미]주사위 게임2
/* if (a !== b && b !== c && c !== a) {
  return a + b + c
} else if (a === b || b === c || c === a) {
  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
} else if (a === b && b === c) {
  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
} */

// flag에 따라 다른 값 반환하기
/* return flag?a+b:a-b */

// 공배수
/* return number % n === 0 && number % m === 0 ? 1 : 0
// 남의 풀이1
return +!(number % n || number % m); // 이거 뭘까??
// 남의 풀이2
return (number%n ===0) ? (number%m===0) ? 1 : 0 : 0;
*/

// n의 배수
// return num % n === 0 ? 1 : 0

// 두 수의 연산값 비교하기
/* return Math.max(Number(`${a}${b}`), 2*a*b
// 남의 풀이 (Math.max 안 쓴 거)
let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
*/
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
