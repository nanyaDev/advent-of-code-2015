let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .filter(_ => _.trim())
  .map(_ => parseInt(_))
  .sort();

let n_arr = [];

function recurse(cnts, en, n) { 
  if ( en === 0 ) {
    n_arr.push(n);
    return 1;
  }

  let ret = 0; 

  for ( let i=0; i < cnts.length; i++ ) {
    if (en - cnts[i] < 0) continue; 
    // note: slice instead of splice to prevent double counting
    ret += recurse( cnts.slice(i+1), en - cnts[i], n+1 ) 
  }

  return ret;
}

console.log(recurse(input,150, 0))

const min = Math.min(...n_arr);
const count = n_arr.filter(_ => _ === min).length;
console.log(count);
