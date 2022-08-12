const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

if (-10000 = (A > B) <=10000) {
  console.log('>');
} else if (-10000 <= (A < B) <= 10000) {
  console.log('<');
} else if (-10000 <= (A === B) <= 10000) {
  console.log('==');
};

// 마지막 줄을 else if로 적으면 틀림. 그치만 <= >=일 수도 있는 거잖아...  