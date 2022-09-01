const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString()
const input = fs.readFileSync(__dirname + '\\ex.txt').toString()

let output = ''
for (i = 1; i <= input; i++) {
  for (j = 1; j <= i; j++) {
    output += '*'
  }
  output += '\n'
}

console.log(output);