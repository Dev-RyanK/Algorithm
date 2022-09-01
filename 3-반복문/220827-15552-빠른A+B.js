// 입력
// ----------
// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000
// ----------

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
// 입력을 문자열로 바꾸고 줄바꿈한다
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')

// 첫줄(테스트케이스 갯수)을 숫자로 바꾸고 변수 선언
let total = Number(input[0])
// 답을 빈 문자열로 변수 선언
let answer = ''

// for (begin; condition; step) {body}
// begin: 단 한 번 실행됨
// condition: 반복마다 해당 조건이 충족됐는지 확인. false면 반복문을 멈춤(예: i > total)
// body: condition이 truthy(참 같은 앖)일 때 계속 실행
// step: 각 반복의 body가 실행된 이후 실행. 말인즉 i++ = i에 더하시오.
// 아래 구문: i가 1부터 total이 될 때까지 
for (let i = 1; i <= total; i++) {
  // 1에서 시작해서 total에 도달하는 반복변수 i를 공백(' ')으로 나눔
  // 예: 첫번째 input[1].split(' ') --> input의 두번째 줄 --> [1, 1]
  let num = input[i].split(' ')
  // answer(빈 문자열 '') = answer('') + (위 num의 첫번째 인덱스([1]) + 두번째 인덱스[1]) + 줄바꿈
  answer += Number(num[0]) + Number(num[1]) + '\n'
}

// 한 줄씩 answer 값을 출력하시오
// 예: 첫번째 답 === 2
console.log(answer);