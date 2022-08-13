const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const input = fs.readFileSync(__dirname + '\\ex.txt', 'utf-8').toString().trim().split(' ').map(Number);

if (89 < input) {
  console.log('A');
} else if (79 < input) {
  console.log('B');
} else if (69 < input) {
  console.log('C');
} else if (59 < input) {
  console.log('D');
} else {
  console.log('F');
}