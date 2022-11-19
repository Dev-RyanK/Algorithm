/* 별찍기 */
const input = [5, 3]
const star = input[0]
const row = input[1]

let output = ''
for (i = 1; i <= input[1]; i++) {
  for (j = 1; j <= input[0]; j++) {
    output += '*'
  }
  output += '\n'
}
console.log(output)

// 코드가 종료되면서 새 줄로 옮겨가는 걸 이용
for (i = 1; i <= input[1]; i++) {
  let output0 = ''
  for (j = 1; j <= input[0]; j++) {
    output0 += '*'
  }
  console.log(output0)
}

let output2 = '*'.repeat(star)
for (let i = 0; i < row; i++) {
  console.log(output2);
}

/* 짝수와 홀수 */
function oddOrEven(num) {
  return num % 2 ? 'Odd' : 'Even'
}
console.log(oddOrEven(3))
console.log(oddOrEven(2))
console.log(oddOrEven(0))


/* 가운데 글자 가져오기 */
// s = 'abcde'
function solution(s) {
  var answer = ''
  let num = s.length
  let countStr = Math.ceil(num / 2) - 1
  if (num % 2 === 0) {
    answer = s.substring(countStr, countStr + 2)
  } else {
    answer = s.substring(countStr, countStr + 1)
  }
  return answer
}

function solution(s) {
  var answer = ''
  let num = s.length
  let countStr = Math.ceil(num / 2) - 1
  num % 2 ? answer = s.substring(countStr, countStr + 1) : answer = s.substring(countStr, countStr + 2)
  return answer
}

function solution(s) {
  // 인풋의 길이를 반 나눠서 올림한 결과 -1(인덱스는 0번째부터 시작하므로)
  let num = Math.ceil(s.length / 2 - 1)
  return s.substring(num, s.length % 2 === 0 ? num + 2 : num + 1)
}


/* 두 정수 사이의 합 */
function solution(a, b) {
  let nums
  if (b < a) [a, b] = [b, a]
  // 배열을 만들어서 자기를 포함한 숫자만큼 -> empty를 채우고 -> 그 자리를 value 빼고 a값 + 인덱스값 해서 -> 빈 값에 하나씩 꽂아줌
  // 예: [3, 5] 
  nums = Array(b - a + 1).fill().map((_, idx) => a + idx)
  return nums.reduce((p, c) => p + c)
}

/* 문자열을 정수로 바꾸기 */
function solution(s) {
  return parseInt(s)
}

/* 없는 숫자 더하기 */
function solution(numbers) {
  let absent = [0]
  absent.push(...Array.from({ length: 9 }, (v, i) => i + 1))
  let result = Array.from(absent.filter((item) => !numbers.includes(item)))

  return result.reduce((p, c) => p + c)
}


/* 음양 더하기 */
// absolutes = [3,4,5] / signs = [false, true, true] / => 6
function solution(absolutes, signs) {
  let num = 0
  for (i in absolutes) signs[i] === true ? num += absolutes[i] : num -= absolutes[i]
  return num
}

/* 평균 구하기 */
function solution(arr) {
  return arr.reduce((p, c) => p + c) / arr.length
}

/* 핸드폰 번호 가리기 */
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.substring(phone_number.length - 4)
}

/* 행렬의 덧셈 */
// Number로 지정해주지 않으면 틀린 답이라고 나왔음
function solution(arr1, arr2) {
  let tempArr = []
  for (num in arr1) {
    let add = arr1[num].map((value, index) => Number(value) + Number(arr2[num][index]))
    tempArr.push(add)
  }
  return tempArr
}


/* x만큼 간격이 있는 n개의 숫자 */
// x=2, n=5 [2,3,6,8,10]
function solution(x, n) {
  let answer = []
  for (i = 1; i <= n; i++) answer.push(x * i)
  return answer
}


/* 12. 부족한 금액 계산하기 */
// [3, 20, 4] // 10
function solution(price, money, count) {
  let arr = []
  for (i = 1; i <= count; i++) arr.push(price * i)
  const totalCost = arr.reduce((p, c) => p + c)
  return totalCost > money === true ? totalCost - money : 0
}


/* 13. 2016년 */


/* 14. 나누어 떨어지는 숫자 배열 */
function solution(arr, divisor) {
  let answer = []
  for (num of arr) num % divisor === 0 ? answer.push(num) : answer.push()
  if (answer.length === 0) answer.push(-1)
  return answer.sort(function (a, b) { return a - b })
}


/* 15. 내적 */
function solution(a, b) {
  let answer = []
  for (i in a) answer.push(a[i] * b[i])
  return answer.reduce((p, c) => p + c)
}
// 다른 사람 풀이
return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);


/* 16. 문자열 내 p와 y의 개수 */
// null의 length는 없으므로 런타임 에러가 나는 풀이방법
// function solution(s) {
//   return s.match(/p/gi).filter(item => item !== '').length === s.match(/y/gi).filter((item) => item !== '').length ? true : false
// }
function solution(s) {
  let pP = s.match(/p/gi)
  let yY = s.match(/y/gi)
  // 둘 중 하나라도 없으면 둘을 비교, false를 반환, 둘 다 없을 시 모두 null 값이므로 true
  return pP === null || yY === null ? pP === yY : pP.length === yY.length
}
// 남의 풀이
return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;


/* 17. 문자열 다루기 기본 */


/* 18. 서울에서 김서방 찾기 */
function solution(seoul) {
  for (i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'kim') return i
  }
}

console.log(solution(['jane', 'kim']))
console.log(solution(['jane', 'ryan', 'kim']))
console.log(solution(['jane', 'ryan', 'kim', 'robin']))
console.log(solution(['kim', 'jane', 'ryan', 'robin']))

// 남의 풀이
let idx = seoul.indexOf('Kim');
return "김서방은 " + idx + "에 있다";


/* 19. 수박수박수박수박수박수? */
// n <= 10000 자연수
function solution(n) {
  return (n % 2 === 0) ? '수박'.repeat(n / 2) : '수박'.repeat(Math.floor(n / 2)) + '수'
}

// 남의 풀이
return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');


/* 20. 완주하지 못한 선수 */
/* 21. 이상한 문자 만들기 */
/* 22. 자릿수 더하기 */
/* 23. 자연수 뒤집기 */
/* 24. 내림차순으로 배치하기 */
/* 25. 정수 제곱근 판별 */
/* 26. 제일 작은 수 제거하기 */
/* 27. 콜라츠 추측 */
/* 28. 하샤드 수 */