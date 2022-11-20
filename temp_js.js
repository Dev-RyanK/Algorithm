
// -----------푸는 중 ----------- //

// 17번
/* function solution(s) {
  if (s.length === 4  s.length === 6) {
    s = Number(s)
    return s !== Number ? true : false
  } else return false
} */

function solution(s) {
  let num = Number(s)
  if (isNaN(num) === true) {
    return false
  } else { // number일 때
    if (num.toString().length === 4  num.toString().length === 6) {
      return true
    } else return false
  }
}

console.log(solution('a234'));
console.log(solution('1234'));
console.log(solution('123'));
console.log(solution('1234aa'));
console.log(solution('aa1234'));
console.log(solution('12aa34'));
console.log(solution('123456'));


// 20번
/* function solution(participant, completion) {
  let aa = []
  let result = participant.filter(
    function (person) {
      let hey = participant.filter((person) => completion.includes(person))
      if (hey.length > 1) {
        // aa.push(hey)
        return hey.sort()
        // return !completion.includes(person)
      }
    })
  // let result = participant.filter((person) => !completion.includes(person))
  return result
} */

const p1 = ["leo", "kiki", "eden"]
const c1 = ["eden", "kiki"]

const p2 = ["marina", "josipa", "nikola", "vinko", "filipa"]
const c2 = ["josipa", "filipa", "marina", "nikola"]

const p3 = ["mislav", "stanko", "mislav", "ana", "mislav"]
const c3 = ["stanko", "ana", "mislav"]

// console.log(solution(p1, c1));
// console.log(solution(p2, c2));
// console.log(solution(p3, c3));

let incl = p3.filter((item) => c3.includes(item))
let noIncl = p3.filter((item) => !c3.includes(item)) // []

console.log(noIncl);

// if 원본 배열.length !== new Set(원본 배열) -> 중복이 있을 경우에
// 원본배열 incl