const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');

// part 1
let ret1 = 0;

input.forEach(line => {
  let dbl_ltr = false; 
  for (let i=1; i < line.length; i++) {
    if (line[i] === line[i-1]) {
      dbl_ltr = true;
      break; 
    }  
  } 

  let arr = line.match(/[aeiou]/gi);
  let vowel_count = arr === null ? 0 : arr.length;

  let forbidden_sq = /ab|cd|pq|xy/.test(line);

  if (dbl_ltr && vowel_count >= 3 && !forbidden_sq) {
    ret1++;
  }
});

console.log(ret1);

// part 2 
let ret2 = 0;

input.forEach(line => {
  let chk1 = false; 
  for (let i=0; i < line.length-2; i++) {
    let s = line[i-1] + line[i];

    if (line.indexOf(s,i+1) !== -1) {
      chk1 = true;
      break;
    }
  } 

  let chk2 = false;
  for (let i=0; i < line.length-2; i++) {
    if (line[i] === line[i+2]) {
      chk2 = true;
      break;
    }
  }
  
  if (chk1 && chk2) {
    ret2++;
  }
});

console.log(ret2);

