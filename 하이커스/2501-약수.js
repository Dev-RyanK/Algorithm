// const input = require("fs").readFileSync("dev/stdin").toString();

let s = input.split(" ");
// N의 약수들 중
let N = parseInt(s[0]);

// K번쨰로 작은 수를 출력하기
let K = parseInt(s[1]);

let primes = [];

for (let q = 1; q <= N; q++) {
  if (N % q === 0) {
    primes.push(q);
  }
}

// primes 중에서 K번째로 작은 수
// [1,2,3,6] 중 3번째로 작은 수 = 3

if (primes.length < K) {
  console.log(0);
} else {
  console.log(primes[K - 1]);
}
