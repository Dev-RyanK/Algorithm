let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(parseInt(input[0]) + parseInt(input[1]));
console.log(parseInt(input[0]) - parseInt(input[1]));
console.log(parseInt(input[0]) * parseInt(input[1]));
console.log(Math.floor(parseInt(input[0]) / parseInt(input[1]))); //나눗셈의 소숫점이 나오지 않게 하기 위해 Math.floor를 사용한다
console.log(parseInt(input[0]) % parseInt(input[1]));