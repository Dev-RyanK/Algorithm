/* function solution(s){
  let answer="";
  return answer;
}
let s="97 75 88 99 95 92 73";

console.log(solution(s)) */

function solution(s) {
  let tempArr = []
  let answer = "";
  let nums = s.split(" ")
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % nums[i] === 0) {
      tempArr.push(nums[i])
      Math.max(tempArr.map(x => Number(x)))
      return Math.max(tempArr.map(x => Number(x)))
    }
    /*     } else {
          Math.min(tempArr.map(x => Number(x)))
          // tempArr.push(nums[i])
          return tempArr
        } */
  }
}

console.log(solution('2 3 4 5'));
console.log(solution('15 3 10 9 7 8'));
console.log(solution('97 75 88 99 95 92 73'))

// 소수의 최대값 정수의 최소값으로 '두 숫자'만 남기는 문제

// -------------------- //
// 문자열 정렬하기
function solution(strings, n) {
  let arr = []
  let arr2 = []
  for (let i = 0; i < strings.length; i++) {
    arr.push(strings[i][n])
    arr = arr.sort()
    if (arr[i] === strings[i][n]) {
      return strings[i]
    }
  }
  // return arr2
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

// ["car", "bed", "sun"]
// ["abcd", "abce", "cdx"]

/* let arr = ["car", "bed", "sun"]

arr.forEach(function (val, idx) { console.log(val, idx) }) */