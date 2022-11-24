// 하.윷놀이
function solution(arr1) {
  // 0의 개수와 인덱스가 일치하도록 배열된 윷짝을 선언
  let yut = ['모', '도', '개', '걸', '윷']
  // 0의 개수를 잴 변수 count를 선언, 0을 할당
  let count = 0
  // 주어진 배열 길이만큼 돌면서 해당 인덱스의 요소가 0일 경우 count에 1씩 더하는 for문
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 0) {
      count++
    }
  }
  // 윳짝의 배열에 count를 인덱스로 넣어 반환
  return yut[count]
}

let arr1 = [0, 1, 0, 0];
console.log(solution(arr1))

