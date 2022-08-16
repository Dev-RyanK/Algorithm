let fs = require('fs');
// let [a, b] = fs.readFileSync(/dev/stdin).toString().split(' ');
let [a, b] = fs.readFileSync(__dirname + '\\ex.txt', 'utf-8').toString().split(' ')

b -= 45;

if (b < 0) {
  b += 60;
  a--;

  if (a === -1) {
    a = 23;
  }
}

console.log(a + ' ' + b);