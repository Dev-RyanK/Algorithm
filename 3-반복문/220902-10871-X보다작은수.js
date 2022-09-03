const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
const input = fs.readFileSync(__dirname + '\\ex.txt').toString().trim().split(' ').map(Number)

console.log(typeof input[1]);