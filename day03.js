const fs = require('fs'); 
const input = fs.readFileSync('./input.txt', 'utf-8');
//const input = "^>v<";


let input1 = "";
let input2 = "";

for (let i=0; i < input.length; i++) {
  if (i%2 === 0) {
    input1 += input[i];
  } else {
    input2 += input[i];
  }
}

let visited = [[0,0]];

function processString(input) {
  let ret = 1;
  let curr = [0,0];

  for (const ch of input) {
    let [x,y] = curr;

    switch(ch) {
      case '>':
        x++;
        break;
      case '<':
        x--;
        break;
      case '^':
        y++;
        break; 
      case 'v':
        y--;
        break;
    }

    curr = [x,y];
    if (!visited.some(arr => arr[0] === curr[0] && arr[1] === curr[1])) { 
      visited.push(curr);
      ret++; 
    }
  }

  return ret;
}

console.log(processString(input1) + processString(input2) - 1);