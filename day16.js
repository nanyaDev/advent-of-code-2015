const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .filter((_) => _.trim());

let chars = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1
}

input.forEach(line => {
  const regex = /Sue (\d+): (.*)/;
  let match = line.match(regex);

  let index = parseInt(match[1]);
  let params = match[2].split(/[:, ]+/);

  if ( index === 241 ) debugger;

  let flag = true; 
  for (let i=0; i < params.length; i+=2) {
    let k = params[i];
    let v = parseInt(params[i+1]);

    // there might be a more elegant way to implement this logic ...
    if ( k === 'cats' || k === 'trees' ) {
      if ( v <= chars[k] ) {
        flag = false;
        break;
      }
    }

    else if ( k === 'pomeranians' || k === 'goldfish' ) {
      if ( v >= chars[k] ) {
        flag = false;
        break; 
      }
    } 

    else if (k in chars && chars[k] !== v) {
      flag = false;
      break;
    } 
  }

  if (flag) {
    console.log(index); 
  } 
});

