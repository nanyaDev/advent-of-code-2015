const MD5 = require('crypto-js/md5');
const input = "yzbqklnj";

let i = 1;
while(true) {
  let s = input + String(i);
  let hash = MD5(s).toString()


  // part 1
  // if (hash.slice(0,5) === "00000") break;

  // part 2
  if (hash.slice(0,6) === "000000") break;
  else i++; 
}

console.log(i);
