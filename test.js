function solution(answers) {
  let count1 = 0
  let count2 = 0
  let count3 = 0
  let one = [1, 2, 3, 4, 5]
  let two = [2, 1, 2, 3, 2, 4, 2, 5]
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  for (i = 0; i <= 10000; i++) {
    if (answers[i].filter(x => one.includes(x)) === true) {
      count1++
    } else if (answers[i].filter(x => two.includes(x)) === true) {
      count2++
    } else if (answers[i].filter(x => three.includes(x)) === true) {
      count3++
    }
  } return count1, count2, count3
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]