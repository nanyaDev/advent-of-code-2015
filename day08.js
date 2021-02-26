const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8')
  .split('\n')
  .filter((_) => _.trim());

let count_char = 0;
let count_code = 0;
let count_repr = 0;

input.forEach(line => {
  let count = 0;
  let sp_ch = 0;

  for(let i=1; i < line.length-1; i++) {
    if (line[i] === "\\" && line[i+1] === "x") {
      i += 3; 
    } else if (line[i] === "\\") {
      i++;
    } 
  count++;
  }

  for (let i=0; i < line.length; i++) {
    if (line[i] === "\"" || line[i] === "\\") sp_ch++;
  }

  count_repr += 2 + line.length + sp_ch
  count_char += count;
  count_code += line.length; 
});

console.log(count_code - count_char); 
console.log(count_repr - count_code);

