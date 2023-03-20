const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

const lines = input.split("\n");
const [n, ...twoNumbers] = lines;
twoNumbers.map(twoString => {
  const [a, b] = twoString.split(" ").map((num) => parseInt(num));
  for( let i = 1 ; i <= b ; i ++ ){
    if( a * i % b == 0 ) {
      console.log(a*i);
      break;
    }
  }
});


// 수학 이야기

let A = 6;
let B = 15;

for( let i = 1 ; i <= B ; i ++ ){
  if( (A * i) % B == 0 ) {
    console.log(A*i);
  }
}

// A = G * a
// B = G * b
// let 최대공약수 = A * B = G * G * a * b / G;
let L = A * B / G;

let G = 1;
for( let g = 1 ; g <= A ; g ++ ){
  if( A % g == 0 && B % g == 0 ){
    // console.log(`공약수 ${g}`);
    G = g;
  }
}

// 168 % 34 = 32
// 34 % 32 = 2
// 32 % /2/ = 0


function gcd(a, b) {
  if( a % b == 0 ) return a;
  return gcd(b, a%b);
}




const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString()


const input = `A6E8`; 
// (10)*16*16*16 + (6)*16*16 + (14)*16 + (8)*1

input = A -> 10
input = A6 -> 10*16 + 6
input = A6E -> (10*16 + 6)*16 + 14
input = A6E8 -> ((10*16 + 6)*16 + 14)*16 + 8
             -> (10*16 + 6)*16*16 + 14*16 + 8
             -> 10*16*16*16 + 6*16*16 + 14*16 + 8

let out = 0;
for( let i = 0 ; i < input.length ; i ++ ){
  if( input[i] === '0' ) out = out * 16 + 0;
  if( input[i] === '1' ) out = out * 16 + 1;
  if( input[i] === '2' ) out = out * 16 + 2;
  if( input[i] === '3' ) out = out * 16 + 3;
  if( input[i] === '4' ) out = out * 16 + 4;
  if( input[i] === '5' ) out = out * 16 + 5;
  if( input[i] === '6' ) out = out * 16 + 6;
  if( input[i] === '7' ) out = out * 16 + 7;
  if( input[i] === '8' ) out = out * 16 + 8;
  if( input[i] === '9' ) out = out * 16 + 9;

  if( input[i] === 'A' ) out = out * 16 + 10;
  if( input[i] === 'B' ) out = out * 16 + 11;
  if( input[i] === 'C' ) out = out * 16 + 12;
  if( input[i] === 'D' ) out = out * 16 + 13;
  if( input[i] === 'E' ) out = out * 16 + 14;
  if( input[i] === 'F' ) out = out * 16 + 15;
}



const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString()

const input = `g Programming Contest
n New Zealand
x This is quite a simple problem.
#`;
const lines = input.split("\n");

lines.map(line => line.toLowerCase()).map(line => {
  console.log(line[0], line.split('').filter(c => c === line[0]).length - 1);
});

for( let l = 0 ; l < lines.length ; l ++ ){
  let line = lines[l].toLowerCase();
  let firstCharacter = line[0]; // 'c'
  if( firstCharacter === '#' ) break;

  let count = 0;
  for( let i = 1 ; i < line.length ; i ++ ){
    if( line[i] === firstCharacter ){
      count = count + 1;
    }
  }
  console.log(firstCharacter, count);
}

let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString();
let input = `10 8
3
0 3
1 4
0 2
`;

const lines = input.split("\n");
const [sero, garo] = lines[0].split(" ").map((n) => parseInt(n));
const N = parseInt(lines[1]);
let g = [0, garo],
  s = [0, sero];
for (let i = 2; i < lines.length; i++) {
  if (lines[i].length === 0) continue;
  const [a, b] = lines[i].split(" ").map((n) => parseInt(n));
  if (a === 0) g.push(b);
  else s.push(b);
}

g.sort((a, b) => a - b);
s.sort((a, b) => a - b);

let s1 = [],
  s2 = [];
for (let i = 0; i < g.length - 1; i++) {
  s1.push(g[i + 1] - g[i]);
}
for (let i = 0; i < s.length - 1; i++) {
  s2.push(s[i + 1] - s[i]);
}

console.log(Math.max(...s1) * Math.max(...s2));