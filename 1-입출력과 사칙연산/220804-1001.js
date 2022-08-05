//한 줄 입력

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' '); // 백준의 예제를 받아옴

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A - B);