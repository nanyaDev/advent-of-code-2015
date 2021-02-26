let input = "1321131112";

function iterate(s) {
  s += "x";
  let ret = "";
  
  let count = 1;
  for (let i=1; i < s.length; i++) {
    if (s[i] === s[i-1]) {
      count++;
    } else {
      ret += String(count) + s[i-1];
      count = 1;
    } 
  }
  
  return ret;
}

let ret = input;

for(let i=0; i < 50; i++) {
  ret = iterate(ret); 
}

console.log(ret.length);
