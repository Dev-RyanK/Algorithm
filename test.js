
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



/* 16. 문자열 내 p와 y의 개수 */
// null의 length는 없으므로 런타임 에러가 나는 풀이방법
function solution(s) {
  return s.match(/p/gi).filter(item => item !== '').length === s.match(/y/gi).filter((item) => item !== '').length ? true : false
}

// 남의 풀이
function solution(s) {
  let pP = s.match(/p/gi)
  let yY = s.match(/y/gi)
  // 둘 중 하나라도 없으면 둘을 비교, false를 반환, 둘 다 없을 시 모두 null 값이므로 true
  return pP === null || yY === null ? pP === yY : pP.length === yY.length
}


function solution(num) {
  let answer = 0;
  while (num !== 1 && answer !== 500) {
    num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
    answer++;
  }
  return num === 1 ? answer : -1;
}


// ------------
// forEach, map, filter: value, index, array

let arr = [1, 1, 2, 3, 4, 4, 4]
console.log(new Set(arr)) // Set(4) {1, 2, 3, 4}

console.log(arr.filter((item, pos) => arr.indexOf(item) === pos)) // [1, 2, 3, 4]


/* 
내장함수를 사용하지 않으면 좋은 건가요
실행속도가 빠른 코드가 좋은 건가요
실행 속도는 어떤 때 느려지나요: '시간복잡도' - bigO 표기법 - for문 < reduce 가 좋음. 시간복잡도의 구조에 따라 런타임이 정해짐. 더 짧게 만든다 === 효율적이다. 이중 for문 <- 안 좋음.
bfs...
하나몬 블로그

같은 배열 내에서 앞 수와 뒤 수를 비교할 때 어떤 함수가 유용한가요?
예) https://school.programmers.co.kr/learn/courses/30/lessons/12906

한 개만 남기려면.
reverse 하기 전에 sort() 왜 먼저 해 줘야?

--- 
sort가 만들어질 때 a-b, b-a 등이 정해져 있었다. 사용법이다.
비교할 순서대로 a, b를 넣을 때부터 순서를 정해서 넣는다. 비교 자체를 안에다 넣는 거기 때문에.

유독 깨달음이 많았던 문제를 벨로그에 정리한다
예제와 함께 기능을 적는다. 어떻게 생각하게 되었는가, 뭘 찾았는가, 어떻게 풀었는가.
벨로그 === 이직 포폴

주니어 이력서: 어떤 기능을 구현했는가보다는 얼마나 성장 가능성이 있는지를 본다. 못하는 건 회사에서 알려줄게. 이런 기능을 구현했다 < 이 기능을 구현하는 동안 어떻게 학습하고 성장했다
'사람'에 대해서 알아야 한다. 프로젝트 이력서가 아니라.
종료된 서비스라도, 이 프로젝트로 이러저러한 작업을 했는데 어떤 사고방식을 갖게 됐고 어떻게 프로젝트를 구성하기 위해 고민을 하게 됐는지, 어떤 생각을 갖고 개발을 하는 사람이 되었는지 등을 써야. 프로젝트에서 '뭘 배웠는지'.

구글링 복붙만 해도 돌아가는 게 기능이다! 사고방식에 대해 작성하라!
스키아 어떤저떤 기능을 구현했다! vs. 
스키마를 구성하려고 할 때 어떤저떤 게 더 중요하다고 생각해서(보안, 성능)~  <- 이게 나음
'나'를 집어넣어서 써라
- 김나영 기술매니저
*/
