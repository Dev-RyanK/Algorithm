// let a = Array(11).fill(false)
//
let a = Array.from({ length: 11 }, (v, i) => i)
let b = 1
console.log(
  // 예: a = 11[]
  a[
    b +
      String(b)
        .split("")
        .reduce((a, c) => a + +c, 0)
  ]
)

console.log(typeof (1 + "1"))
