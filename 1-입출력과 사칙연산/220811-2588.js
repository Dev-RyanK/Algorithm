// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input = "472\n385"
const first = parseInt(input[0] + input[1] + input[2]);
const third = parseInt(first * input[6]);
const fourth = parseInt(first * input[5]);
const fifth = parseInt(first * input[4]);

console.log(third);
console.log(fourth);
console.log(fifth);
console.log(third + (fourth * 10) + (fifth * 100));