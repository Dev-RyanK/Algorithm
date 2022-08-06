let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
// trim()은 문자열의 좌우 공백을 제거한다.
console.log(`${input}??!`);