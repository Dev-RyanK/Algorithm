let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync(__dirname + '\\ex.txt').toString().trim().split('\n');

// input을 \n 으로 나눠서, [0]은 '시간 분', [1]은 '동작 시간'. 변수 선언을 해주는 게 Number(input[1])보다는 짧게 먹힘.

const current = input[0].split(' ').map(Number);

const currentHour = current[0];
const currentMin = current[1];
const cookTime = Number(input[1]);

const cookEndTimeHour = parseInt((currentHour * 60 + currentMin + cookTime) / 60);
const cookEndTimeMin = parseInt((currentHour * 60 + currentMin + cookTime) % 60);

console.log(cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour, cookEndTimeMin);