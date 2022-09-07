// 5
// 20 10 35 30 7
// -----
const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().split('\n')
let count = Number(input[0]);
let numbers = input[1].split(' ').map(x => Number(x));

numbers.sort((a, b) => a - b);

console.log(`${numbers[0]} ${numbers[count - 1]}`);
//ort 메서드로 내림차순 정렬을 하면 numbers 배열에서 index 0번째가 최솟값이 되고 numbers 배열에서 첫 번째 줄에 주어진 정수 N - 1(마지막 인덱스) 은 최댓값이 됩니다. / https://gurtn.tistory.com/24