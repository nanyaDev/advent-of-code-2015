const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
});


let count = 0; 
let index = 0;
let flag = true;
rl.on('line', line => {
  for (const ch of line) {
    index++;

    if (ch === '(') count++;
    else count--;

    if (flag && count < 0) {
      console.log(index);
      flag = false;
    }
  }

  console.log(count);
});


