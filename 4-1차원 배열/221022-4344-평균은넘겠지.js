// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = require('fs').readFileSync(__dirname + '\\ex.txt').toString().trim().split('\n')

// console.log(input);

for (let i = 1; i <= input[0]; i++) {
  let input2 = input[i].split(' ')
  // console.log(parseInt(input2));
  for (let j = 1; j <= input2[0]; j++) {
    let scores = parseInt(input2[j])
    let sum = 0
    if (scores)
      sum += scores[i]
    console.log(scores);
    // console.log(sum);
    // console.log(input2);
    // const avr = input2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  }
}

// console.log((0.5556).toFixed([3]))
// const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;