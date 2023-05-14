// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const input = `8 16\n32 4\n17 5\n0 0`.split("\n")

//각 테스트 케이스마다
// 첫 번째 숫자가 두 번째 숫자의 약수라면 factor
// 배수라면 multiple
// 둘 다 아니라면 neither를 출력

// 한 줄이 테스트 케이스 한 개

for (i = 0; i < input.length - 1; i++) {
  const A = parseInt(input[i].split(" ")[0])
  const B = parseInt(input[i].split(" ")[1])

  if (A > B && A % B === 0) {
    console.log("multiple")
  } else if (A < B && B % A === 0) {
    console.log("factor")
  } else {
    console.log("neither")
  }
}

// 음 뭐지...
