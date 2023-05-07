// const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim();

/* const alpha = [];
const arr = [];
const location = [];


for (j of input) {
  arr.push(j);
}

for (let k = 0; k < alpha.length; k++) {
  // if (alpha[k] === arr[k]) {
  // arr의 값[k]가 alpha에 포함이 되어 있으면 alpha의 k를 반환
  if (alpha[k] === arr[k]) {
    location.push(k);
  } else location.push(-1);
}

console.log(location);
 */

const alpha = [];
for (let i = 97; i < 123; i++) {
  alpha.push(String.fromCharCode(i));
}

const str = alpha.join("");
const arr = [];
for (el of input) {
  for (let j = 0; j < 26; j++) {
    if (str.includes(el)) {
      arr.push(j);
    }
  }
}
console.log(arr);
