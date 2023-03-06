// 16분 소요

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");;

// 전체 점수 중 최댓값 M을 구하고
// 모든 점수를 /M*100 하고
// 그 점수로 새로운 평균을 낸다

const input = require("fs")
  .readFileSync(__dirname + "\\ex.txt")
  .toString()
  .trim()
  .split("\n");

// 시험 본 과목의 개수
const N = parseInt(input[0]);

// 전체 성적
const scores = input[1].split(" ");
const nums = scores.map((x) => parseInt(x));
const M = Math.max(...nums);
const newScores = nums.map((x) => (x / M) * 100);
const total = newScores.reduce((a, c) => a + c, 0);
const newAverage = total / N;

console.log(newAverage);
