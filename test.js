function solution(s) {
  let arr = Array(...s.split(' '))
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0) {
      let hey = arr[i]
      return hey
    }
  }
  // return arr
}


console.log(solution("try hello world"))