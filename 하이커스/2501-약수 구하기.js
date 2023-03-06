// 14분 소요

// const input = require('fs').readFileSync('/dev/stdin').toString()

// 두 개의 자연수 N과 K가 주어졌을 때
// N의 약수들 중 K번째로 작은 수를 출력
// 만일 N의 약수의 개수가 K개보다 적어서
// K번째 약수가 존재하지 않을 경우에는 0을 출력

const input = "6 3";

const s = input.split(" ");

const N = parseInt(s[0]);
const K = parseInt(s[1]);

const prime = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    prime.push(i);
  }
}

// else 문을 쓸 때 반대가 <= 일 수도 있나?
if (prime.length < K) {
  console.log(0);
} else console.log(prime[K - 1]);
