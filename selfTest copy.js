// 중.Triangular output
function solution(star) {
  let answer = ''
  // 입력된 star만큼 줄을 바꾸는 for 문을 선언
  // i는 star의 수, 즉 star가 3일 경우 3만큼 돌게 된다
  for (let i = 0; i <= star; i++) {
    answer += '\n'
    // 공백: 줄이 거듭할 때마다 증가한 i만큼 작아지는 반복으로, 첫줄에서는 2, 둘째 둘에서는 1만큼 작아진다
    for (let j = 0; j < star - i; j++) {
      answer += ' '
    }
    // 중앙과 왼쪽 부분의 별. i보다 작을 때, 즉 0부터 3까지 돌아감. 첫 줄에서는 0개, 둘째 줄에서는 2개, 셋째 줄에서 3개를 찍음
    for (let k = 0; k < i; k++) {
      answer += '*'
    }
    // 오른편의 별. i-1부터 작을 때 붙기 때문에 둘째 줄부터 별을 한 개씩 붙여가며 찍게 됨.
    for (let l = 0; l < i - 1; l++) {
      answer += '*'
    }
  }
  console.log(answer)
}

let star = 9;
solution(star)