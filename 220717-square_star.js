// 원래 내가 푼 거
// let output = ''
//     for (let i = 1; i<=3; i++) {
//       for (let j = 1; j<=5; j++) {
//         output += '*' //별 생성
//       }
//       output += '\n' //줄 생성
//     }
//     console.log(output)


// 아무 값이나 들어가도 되게 하는 식. 5*3과 2*2 별이 찍히게 한다
process.stdin.setEncoding("uft8");
process.stdin.on("data", (data)) => {
  const n = data.split(" "); // 문자열을 구분자로 잘라서 배열로 저장. string.split(구분자seperator, 크기limit) 식임.
  const a = Number(n[0]), b = Number(n[1]);
}

// 입력 값 b(3) 만큼 반복문을 돌린다
for (let i = 0; i < b; i++) {
  // star 변수 초기화(?) 무슨 뜻?
  let star = "";

  // 위 for문이 한 번 돌아갈 때마다 입력 값 a(5) 만큼 반복문을 돌린다.
  for (let j = 0; j < a; j++) {
    // stars = stars + "*"
    stars += "*";
  }
  // 콘솔에 현재까지 저장된 stars 값을 찍는다 (*****)
  console.log(stars);

  // i가 b(3)보다 작을 경우 맨 위로 가 다시 for문을 시행한다.
}