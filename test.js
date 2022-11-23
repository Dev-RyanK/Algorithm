/* function solution(numbers) {
  let arr = []
  let hey = numbers.sort()
  for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++) {
      arr.push(hey[i] + hey[j])
    }
  }
  return arr.filter((val, idx) => arr.indexOf(val) === idx).sort((a, b) => a - b)
} */

function solution(numbers) {
  let arr = numbers.sort()
  return arr.map((val, idx) => val + val)
  // return arr.map((val, idx) => val[idx] + val[idx + 1])
  // return arr
}

console.log(solution([2, 1, 3, 4, 1]))	// [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7]))	// [2,5,7,9,12]