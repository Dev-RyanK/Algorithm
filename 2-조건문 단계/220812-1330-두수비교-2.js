const fs = require('fs')
const [a,b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(val=>+val);

if(a > b) {
    console.log('>');
} else if(a < b) {
    console.log('<');
} else {
    console.log('==');
} // else에는 조건이 붙지 않고 나머지 모든 경우를 총칭한다