const fs = require('fs');
const a = fs.readFileSync(__dirname + '\\ex.txt', 'utf-8');

console.log(a);