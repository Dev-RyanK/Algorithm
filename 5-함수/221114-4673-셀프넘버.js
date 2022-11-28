/* let arr = [1, 3, 5, 7, 9, 20]
for (let i = 1; i < 908; i++) {
  console.log(20 + 11 * i)
} */
// 틀렸음! 끝자리 4 정도로 차이남
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

let compare = Array.from({ length: 30 }, (v, i) => String(i + 1))
let arr = []
for (let i = 0; i < compare.length; i++) {
  if (compare[i].length < 2) {
    arr.push(Number(compare[i]) * 2)
  } else {
    // length === 2
    for (let j = 0; j < compare[i].length; j++) {
      // compare[i].map((v, idx) => (compare[i].length - i) + idx)
      // compare[i] === ['10'] map ㅡ쓰려고 배열 선언함
      let test = new Array(compare[i]).map((v, idx) => v[idx] + v[idx - j])
      arr.push(Number(...test))
    }
  }
}

console.log(arr);