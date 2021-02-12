const readline = require('readline');
const fs       = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
});

let paper = 0;
let ribbon = 0;

rl.on('line', line => {
  let [l,w,h] = line.split('x').map(Number);
  let max = Math.max(l,w,h);
  let area = 2*l*w + 2*w*h + 2*h*l + l*w*h/max;
  let len = 2*l + 2*w + 2*h - 2*max + l*w*h;
  paper += area;
  ribbon += len;
  console.log(ribbon);
});





