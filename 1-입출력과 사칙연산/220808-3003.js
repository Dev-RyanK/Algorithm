let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

input = [0, 0, 0, 0, 2, 8];
// 배열 지정
const chess = [1, 1, 2, 2, 2, 8];
// map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 메서드
// let answer = input.map(function(i, index){
//   return chess[index] - i
// });
let answer = input.map((i, index) => chess[index] - i);

// (answer) 로 쓰면 배열 자체를 보여주고 ...을 쓰면 내용물을 보여준다
console.log(...answer);