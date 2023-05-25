// 수 조작하기2
/* function solution(numLog) {
  let answer = ""
  for (let i = 0; i < numLog.length; i++) {
    let cal = numLog[i - 1] - numLog[i]
    if (cal === 1) {
      answer += "s"
    } else if (cal === -1) {
      answer += "w"
    } else if (cal === -10) {
      answer += "d"
    } else if (cal === 10) {
      answer += "a"
    } else if (cal === undefined) {
      answer += ""
    }
  }
  return answer
}

// 남의 풀이
const convert = {
  1: "w",
  "-1": "s",
  10: "d",
  "-10": "a",
}

return numLog
  .slice(1)
  .map((v, i) => {
    return convert[v - numLog[i]]
  })
  .join("") */

// 수 조작하기1
/* function solution(n, control) {
  for (i of control) {
    if (i === "w") {
      n += 1
    } else if (i === "s") {
      n -= 1
    } else if (i === "d") {
      n += 10
    } else if (i === "a") {
      n -= 10
    }
  }
  return n
}

// 남의 풀이
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
}

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n)
}

// 남의 풀이2
for (let i = 0; i < control.length; i++) {
  switch (control[i]) {
    case "w":
      n++
      break
    case "s":
      n--
      break
    case "d":
      n += 10
      break
    case "a":
      n -= 10
      break
  }
}
return n */

// 마지막 두 원소
/* function solution(num_list) {
  let finalNum = num_list[num_list.length - 1]
  let secondNum = num_list[num_list.length - 2]
  if (finalNum > secondNum) {
    num_list.push(finalNum - secondNum)
  } else {
    num_list.push(finalNum * 2)
  }
  return num_list
}

// 남의 풀이
const [a, b] = [...num_list].reverse()
return [...num_list, a > b ? a - b : a * 2] */

// 이어 붙인 수
/* function solution(num_list) {
  let oddNum = ""
  let evenNum = ""
  const aa = num_list.map((x) => x.toString())
  for (const num of aa) {
    Number(num) % 2 ? (oddNum += num) : (evenNum += num)
  }
  return parseInt(oddNum) + parseInt(evenNum)
}

solution([3, 4, 5, 2, 1])
solution([5, 7, 8, 3])

// 남의 풀이 (멋지긴 하나 가독성은 떨어지는)
const odd = [...(num_list + "")]
  .map((x) => (Number(x) % 2 === 1 ? x : ""))
  .join("")
const even = [...(num_list + "")]
  .map((x) => (Number(x) % 2 === 0 ? x : ""))
  .join("")
return Number(odd) + Number(even) */

// 원소들의 곱과 합
/* function solution(num_list) {
  let multiple = 0
  let square = 0
  for (let i = 0; i < num_list.length; i++) {
    multiple = num_list.reduce((p, c) => p * c, 1)
    square = num_list.reduce((p, c) => p + c, 0) ** 2
  }
  return multiple < square ? 1 : 0
}

// 남의 풀이
function solution(num_list) {
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num
    }
    return accMul < accSum ** 2 ? 1 : 0
} */

// 등차수열의 특정한 항만 더하기
/* function solution(a, d, included) {
  let arr = []
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      arr.push(a + d * i)
    }
  }
  return arr.reduce((p, c) => p + c, 0)
}

// 남의 풀이
var answer = 0;
    // an = a + d(n - 1);
    for(let i = 0; i < included.length; i++) {
        if(included[i]) {
            answer += (a + (d * i))
        }
    }
    return answer; */

// [미]문자열 겹쳐쓰기
/* const mystr = "He11oWor1d"
const ovstr = "lloWorl"
const s = 2

const front = mystr.substring(0, s)
if (mystr.length > ovstr.length) {
  const backLength = mystr.length - ovstr.length - s
  // 전체 길이 - 앞에 넣은 숫자 = 뒤에서부터 n글자
  const back = mystr.slice(-backLength, mystr.length)
  let answer = front + ovstr + back
  console.log(answer)
} */

// [미] 홀짝에 따라 다른 값 반환하기
/* function solution(n) {
  let arr = []
  if (n % 2 === 0) {
    for (let i = 1; i < n; i++) {
      while (2 * i <= n) {
        arr.push(2 * i)
        i + 1
        break
      }
      const arr2 = arr.map((x) => x ** 2)
      return arr2.reduce((p, c) => p + c, 0)
    }
  } else {
    for (let i = 1; i <= n; i++) {
      while (2 * i - 1 <= n) {
        arr.push(2 * i - 1)
        i + 1
        break
      }
      return arr.reduce((p, c) => p + c, 0)
    }
  }
} */

// 대소문자 바꿔서 출력하기
/* let str = "aBcDeFg"
let answer = []
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase()) {
    answer.push(str[i].toUpperCase())
  } else if (str[i] === str[i].toUpperCase()) {
    answer.push(str[i].toLowerCase())
  }
}
console.log(answer.toString().split(",").join(""))

// 남의 풀이1
str = input[0].split("")
str.forEach((value, index) => {
  if (value === value.toUpperCase()) {
    str[index] = value.toLowerCase()
  } else {
    str[index] = value.toUpperCase()
  }
})
console.log(str.join(""))

// 남의 풀이2
ss = ""
for (let i of str) {
  if (i == i.toUpperCase()) {
    ss += i.toLowerCase()
  } else {
    ss += i.toUpperCase()
  }
}
console.log(ss) */

// [미] 원소들의 곱과 합
/* let arr = [3, 4, 5, 2, 1]
let arr2 = [5, 7, 8, 3]

let multiple = arr2.reduce((p, c) => console.log(p * c), Math.min(...arr2))
let square = arr2.reduce((p, c) => p + c, Math.min(...arr2)) ** 2

console.log(multiple, square)
console.log(5 * 7 * 8 * 3) */

// [미]주사위 게임2
/* if (a !== b && b !== c && c !== a) {
  return a + b + c
} else if (a === b || b === c || c === a) {
  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
} else if (a === b && b === c) {
  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
} */

// flag에 따라 다른 값 반환하기
/* return flag?a+b:a-b */

// 공배수
/* return number % n === 0 && number % m === 0 ? 1 : 0
// 남의 풀이1
return +!(number % n || number % m); // 이거 뭘까??
// 남의 풀이2
return (number%n ===0) ? (number%m===0) ? 1 : 0 : 0;
*/

// n의 배수
// return num % n === 0 ? 1 : 0

// 두 수의 연산값 비교하기
/* return Math.max(Number(`${a}${b}`), 2*a*b
// 남의 풀이 (Math.max 안 쓴 거)
let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
*/
// 더 크게 합치기
/* function solution(a, b) {
  const a_str = a.toString()
  const b_str = b.toString()
  const ab = parseInt(a_str + b_str)
  const ba = parseInt(b_str + a_str)
  if (ab > ba) {
    return ab
  } else if (ab < ba) {
    return ba
  } else {
    return ab
  }
} 
// 남의 풀이
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))


*/

// 문자열 곱하기
/* function solution(my_string, k) {
  return my_string.repeat(k)
} */

// 문자 리스트를 문자열로 변환하기
/* function solution(arr) {
  let answer = arr.toString().split(",").join("")
  return answer
}

// 남의 풀이
return arr.join("")
*/

// 문자열 섞기
/* const str1 = "aaaaa"
const str2 = "bbbbb"

const arr = []
for (let i = 0; i < str1.length; i++) {
  const arr1 = Array.from(str1.split(""))
  const arr2 = Array.from(str2.split(""))
  arr.push(arr1[i])
  arr.push(arr2[i])
}

console.log(arr.toString().split(",").join(""))

- 남의 풀이
function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("")
} */

// 문자열 반복해서 출력하기
/* let input = "string 5".split(" ")

let str = input[0]
let n = Number(input[1])
console.log(str.repeat(n)) */
