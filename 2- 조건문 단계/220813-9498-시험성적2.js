const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const input = fs.readFileSync(__dirname + '\\ex.txt', 'utf-8').toString().trim().split(' ').map(Number);

console.log(input > 89 ? 'A' : input > 79 ? 'B' : input > 69 ? 'C' : input > 59 ? 'D' : 'F')

// 삼항연산자를 조건 ? 출력 : 다른 조건 ? ... 으로 표기해도 된다는 걸 배웠음. 마지막 : 뒤에는 else 구문처럼 앞의 모든 항목이 아닐 경우의 결과가 들어온다.