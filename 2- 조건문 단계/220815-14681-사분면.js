const fs = require('fs');
// const [x, y] = fs.readFileSync(0).toString().split('\n').trim().map(Number);
const [x, y] = fs.readFileSync(__dirname + '\\ex.txt', 'utf-8').toString().trim().split('\n').map(Number);

if (x > 0 && y > 0) {
  console.log('1');
} else if (x < 0 && y > 0) {
  console.log('2');
} else if (x < 0 && y < 0) {
  console.log('3');
} else if (x > 0 && y < 0) {
  console.log('4');
}

// console.log(x > 0 && y > 0 ? '1' : x < 0 && y > 0 ? '2' : x < 0 && y < 0 ? '3' : x > 0 && y < 0 ? '4' : '0');