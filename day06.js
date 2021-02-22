const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .filter((_) => _.trim());

const n = 1000;
let arr = Array.from(Array(n), () => new Array(n).fill(0));

let debug = 1;

input.forEach(line => { 
  let [x1,y1,x2,y2] = line.match(/\d+/g);
  let x = [parseInt(x1), parseInt(x2)];
  let y = [parseInt(y1),parseInt(y2)];

  if (line.search('turn on') >= 0) on(x,y);
  if (line.search('turn off') >= 0) off(x,y);
  if (line.search('toggle') >= 0) toggle(x,y);

  // console.log(debug, ": ", sum2d(arr), " : ", line); 
  debug++;
});

console.log(sum2d(arr));

function on(x,y) {

  for (let i = x[0]; i <= x[1]; i++) { 
    for (let j = y[0]; j <= y[1]; j++) {
      // arr[i][j] = 1; 
      arr[i][j]++;
    } 
  }
}

function off(x,y) {
  for (let i = x[0]; i <= x[1]; i++) { 
    for (let j = y[0]; j <= y[1]; j++) {
      // arr[i][j] = 0; 
      if (arr[i][j] > 0) arr[i][j]--;
    } 
  }
}

function toggle(x,y) { 
  for (let i = x[0]; i <= x[1]; i++) { 
    for (let j = y[0]; j <= y[1]; j++) {
      // arr[i][j] = -arr[i][j] + 1; 
      arr[i][j] += 2;
    } 
  }
}

function sum2d(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    } 
  }

  return sum;
}
