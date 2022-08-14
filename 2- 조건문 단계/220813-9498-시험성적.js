const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const input = fs.readFileSync(__dirname + '\\ex.txt', 'utf-8').toString().trim().split(' ').map(Number);

if (89 < input) {
  console.log('A');
} else if (79 < input) {
  console.log('B');
} else if (69 < input) {
  console.log('C');
} else if (59 < input) {
  console.log('D');
} else {
  console.log('F');
}

// input 좌우로 설정했더니 계속 틀렸다고 나와서 한쪽 < 으로 표기했더니 맞았음. 어쩌면 && 연산자를 사용하면 될 지도? 시도해볼 것.