const fs = require('fs');
const input = fs.readFileSync('./input.txt','utf-8');

// find surrounding curly braces, if they exist
function curlyCoords(index) {
  let ret = [0,0];

  let i = 0;
  let m1 = 0;
  let m2 = 0;
  while(true) {
    let ch = input[index+i];
    debugger;

    if (ch === '[') m1++;
    if (ch === '{') m2++; 

    if (ch === ']') {
      if (m1 === 0) return -1;
      else m1--; 
    }
    
    if (ch === '}') {
      if (m2 === 0) {
        ret[1] = index + i;
        break; 
      } else m2--;
    } 

    i++; 
  }

  let j = 0;
  let m = 0;
  while(true) {
    let ch = input[index+j];

    if (ch === '}') m++; 

    if (ch === '{') {
      if (m === 0) {
        ret[0] = index + j;
        break; 
      } else m--;
    } 

    j--; 
  }

  return ret;
}

// remove objects with red attribute
function removeRed(input,ranges) {
  let ret = '';

  for ( let i=0; i < input.length; i++ ) {
    let flag = true;
    for ( let j=0; j < ranges.length; j++) {
      if ( i >= ranges[j][0]  && i <= ranges[j][1]) {
        flag = false;
        break;
      }
    }

    if (flag) ret += input[i];
  }

  return ret;
}

// main: part 2
let matchRed = [...input.matchAll(/:"red"/g)]
let arrRed = [];

for ( let i=0; i < matchRed.length; i++ ) {
  arrRed.push(matchRed[i]['index']);
}

let ranges = [];
for ( let i=0; i < arrRed.length; i++ ) {
  let index = arrRed[i];
  let r = curlyCoords(index);

  if (r !== -1) ranges.push(r);
  // the array check wasn't needed bc the colon in the regex guarantees it isn't an array
}

let modInput = removeRed(input,ranges);

// main: part 1 (changed input to modInput for part 2)
const matches = modInput.match(/-?\d+/g);

let acc = 0;
for ( let i=0; i < matches.length; i++ ) {
  acc += +matches[i];
}

console.log(acc);
