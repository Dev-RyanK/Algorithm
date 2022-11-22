/* 1. 별찍기 */
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

/* 2. 짝수와 홀수 */
function oddOrEven(num) {
  return num % 2 ? 'Odd' : 'Even'
}
console.log(oddOrEven(3))
console.log(oddOrEven(2))
console.log(oddOrEven(0))


/* 3. 가운데 글자 가져오기 */
// s = 'abcde'
function solution(s) {
  let num = s.length
  let countStr = Math.ceil(num / 2) - 1
  return num % 2 ? s.substring(countStr, countStr + 1) : s.substring(countStr, countStr + 2)
}

console.log(solution('abcde'))
console.log(solution('abcd'))


function solution(s) {
  // 인풋의 길이를 반 나눠서 올림한 결과 -1(인덱스는 0번째부터 시작하므로)
  let num = Math.ceil(s.length / 2 - 1)
  return s.substring(num, s.length % 2 === 0 ? num + 2 : num + 1)
}


/* 4. 두 정수 사이의 합 */
// 배열을 만들어서 자기를 포함한 숫자만큼 -> empty를 채우고 -> 그 자리를 value 빼고 a값 + 인덱스값 해서 -> 빈 값에 하나씩 꽂아줌
// 예: [3, 5] 
function solution(a, b) {
  if (a > b) [a, b] = [b, a]
  let nums = Array(b - a + 1).fill().map((_, idx) => a + idx)
  return nums.reduce((p, c) => p + c)
}

console.log(solution(3, 5));
console.log(solution(5, 3));
console.log(solution(3, 3));


/* 5. 문자열을 정수로 바꾸기 */
function solution(s) {
  return parseInt(s)
}

/* 6. 없는 숫자 더하기 */
function solution(nums) {
  let absent = [0]
  absent.push(...Array.from({ length: 9 }, (v, i) => i + 1))
  let result = Array.from(absent.filter(item => !nums.includes(item)))
  return result.reduce((p, c) => p + c)
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));


/* 7. 음양 더하기 */
// absolutes = [3,4,5] / signs = [false, true, true] / => 6
function solution(abs, signs) {
  let num = 0
  for (i in abs) signs[i] === true ? num += abs[i] : num -= abs[i]
  return num
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));


/* 8. 평균 구하기 */
function solution(arr) {
  return arr.reduce((p, c) => p + c) / arr.length
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));


/* 9. 핸드폰 번호 가리기 */
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.substring(phone_number.length - 4)
}


/* 10. 행렬의 덧셈 */
// Number로 지정해주지 않으면 틀린 답이라고 나왔음
function solution(arr1, arr2) {
  let tempArr = []
  for (num in arr1) {
    let add = arr1[num].map((value, index) => Number(value + arr2[num][index]))
    tempArr.push(add)
  }
  return tempArr
}

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]));
console.log(solution([[1], [2]], [[3], [4]]));

/* 11. x만큼 간격이 있는 n개의 숫자 */
function solution(x, n) {
  let answer = []
  for (i = 1; i <= n; i++) answer.push(x * i)
  return answer
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));


/* 12. 부족한 금액 계산하기 */
function solution(price, money, count) {
  let arr = []
  for (i = 1; i <= count; i++) arr.push(price * i)
  const totalCost = arr.reduce((p, c) => p + c)
  return totalCost > money ? totalCost - money : 0
}

console.log(solution(3, 20, 4)); //10


/* 13. 2016년 */
function solution(a, b) {
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  let date = new Date(`2016-${a}-${b}`)
  return days[date.getDay()]
}


/* 14. 나누어 떨어지는 숫자 배열 */
function solution(arr, divisor) {
  let answer = []
  for (num of arr) num % divisor === 0 ? answer.push(num) : answer.push()
  return answer.length ? answer.sort((a, b) => a - b) : [-1]
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));


/* 15. 내적 */
// a[0]*b[0] + a[1]*b[1] ...
function solution(a, b) {
  let answer = []
  for (i in a) answer.push(a[i] * b[i])
  return answer.reduce((p, c) => p + c)
}
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); //3
console.log(solution([-1, 0, 1], [1, 0, -1])); //-2

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
// 남의 풀이
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split('').every(num => !isNaN(num)) // 모든 요소가 number면 true 리턴
    // 예: '0010'.split('') => 0, 0, 1, 0
  } else {
    return false
  }
}

console.log(solution('0034'));
console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('123'));
console.log(solution('1234aa'));
console.log(solution('aa1234'));
console.log(solution('12aa34'));
console.log(solution('123456'));


/* 18. 서울에서 김서방 찾기 */
function solution(seoul) {
  for (i = 0; i < seoul.length; i++) if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`
}

console.log(solution(['Jane', 'Kim']))
console.log(solution(['Jane', 'Ryan', 'Kim']))
console.log(solution(['Jane', 'Ryan', 'Kim', 'Robin']))
console.log(solution(['Kim', 'Jane', 'Ryan', 'Robin']))

// 남의 풀이
let idx = seoul.indexOf('Kim');
return "김서방은 " + idx + "에 있다";


/* 19. 수박수박수박수박수박수? */
// n <= 10000 자연수
function solution(n) {
  return (n % 2 === 0) ? '수박'.repeat(n / 2) : '수박'.repeat(Math.floor(n / 2)) + '수'
}

// 남의 풀이
return '수박'.repeat(n / 2) + (n % 2 ? '수' : '');

/* 20. 완주하지 못한 선수 */
// 남의 풀이. sort로 순차 정렬을 하고 일치하지 않는 것을 반환한다
function solution(p, c) {
  p.sort()
  c.sort()
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== c[i]) {
      return p[i]
    }
  }
}


/* 21. 이상한 문자 만들기 */
// 남의 풀이
function solution(s) {
  let words = s.split(' ')
  let answer = []
  for (let i = 0; i < words.length; i++) {
    answer.push(words[i].split('').map((val, idx) => idx % 2 ? val.toLowerCase() : val.toUpperCase()).join(''))
  }
  return answer.join(' ')
}

/* 22. 자릿수 더하기 */
function solution(n) {
  return String(n).split('').map(x => Number(x)).reduce((p, c) => p + c)
}

console.log(solution(123));
console.log(solution(987));


/* 23. 자연수 뒤집기 */
// 테스트는 통과했으나 채점 실패
/* function solution(n) {
  return n.toString().split('').sort((a, b) => b - a).map(x => Number(x))
} */
function solution(n) {
  return String(n).split('').reverse().map(x => Number(x))
}

console.log(solution(12345));
console.log(solution(54321));
console.log(solution(9234));
console.log(solution(132123));
console.log(solution(123000));

/* 24. 내림차순으로 배치하기 */
function solution(n) {
  let answer = String(n).split('').map(x => Number(x)).sort().reverse().join('')
  return Number(answer)
}

console.log(solution(118372));
console.log(solution(110072));

/* 25. 정수 제곱근 판별 */
function solution(n) {
  let x = Number(Math.sqrt(n))
  return Number.isInteger(x) ? Math.pow((x + 1), 2) : -1
}

console.log(solution(121));
console.log(solution(3));


/* 26. 제일 작은 수 제거하기 */
function solution(arr) {
  let temp = []
  temp.push(Math.min(...arr))
  let answer = arr.filter(item => !temp.includes(item))
  return answer.length !== 0 ? answer : [-1]
}
console.log(solution([4, 3, 2, 1]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([3, 1, 2, 4]));
console.log(solution([10]));
console.log(solution([-2, 1, 0]));
console.log(solution([0, 1, 2]));


/* 27. 콜라츠 추측 */
// 남의 풀이
function solution(num) {
  let answer = 0;
  while (num !== 1 && answer !== 500) {
    num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
    answer++;
  }
  return num === 1 ? answer : -1;
}

/* 28. 하샤드 수 */
function solution(x) {
  x = String(x).split('').map(item => Number(item))
  let num = x.reduce((p, c) => p + c)
  return Number(x.join('')) % num ? false : true
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(18));


/* 29. 3진법 뒤집기 */
function solution(n) {
  let answer = n.toString(3).split('').reverse().join('')
  return parseInt(answer, 3)
}

console.log(solution(45));
console.log(solution(125));

/* 30. 최소 직사각형 */
/* 31. 같은 숫자는 싫어 */
/* 32. 두 개 뽑아서 더하기 */
/* 33. 로또의 순위 */
/* 34. 모의고사 */

