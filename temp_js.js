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
for (let i = 0; i < wordArr.length; i++) {
  let word = wordArr[i]
  let nums = numArr[i]
  // console.log(word, nums);

  // let re = new RegExp(wordArr[i], "g")
  // let re2 = new RegExp(numArr[i], 'g')
  // let rr = /g^\S+$/
  let re = new RegExp(word, 'g')
  // let output = s.replace(re, numArr[i])
  let output = s.replaceAll(re, nums)
  return word
}


function solution(s) {
  const numArr = Array.from({ length: 10 }, (v, i) => i).toString()
  let wordArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let x = []
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < wordArr.length; j++) {
      if (s[i] + s[i + 1] === wordArr[j][0] + wordArr[j][1]) {
        // x.push(wordArr.indexOf(wordArr[j]))
        x.push(wordArr[j])
      } else if (s[i] === numArr[j]) {
        x.push(s[i])
      }
    }
  }
  // return x.join('')
  return x
}

// 오브젝트로 키-밸류 맞춰서 하는 법도 있을 거 같아
// 아예 split으로 다 해체해서 number와 string 배열로 작업하는 법은.

console.log(solution("one4seveneight"));
console.log(solution("23four5six7")); // 중간5, 끝자리 7이 증발하는데 왜?
console.log(solution("2three45sixseven")); // 45에서 5가 증발
console.log(solution("123"));

// console.log("23four5six7"[6]);