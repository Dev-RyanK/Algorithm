const fs = require('fs');
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [b0, b1, b2] = b.split('');
const r1 = a * b2;
const r2 = a * b1;
const r3 = a * b0;
const sum = r1 + parseInt(r2 * 10) + parseInt(r3 * 100);
console.log(`${r1}\n${r2}\n${r3}\n${sum}`);