const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '\\ex.txt').toString();

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}