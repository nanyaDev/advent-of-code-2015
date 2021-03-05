let input = 'cqjxjnds';

// 1st requirement: test for 3 straight letters
function chk1(pwd) {
  for ( let i=2; i < pwd.length; i++ ) {
    let a = pwd.charCodeAt(i-2);
    let b = pwd.charCodeAt(i-1);
    let c = pwd.charCodeAt(i);

    if ( b === a + 1 && c === b + 1 ) return true;
  }
  return false;
}

// 2nd requirement: test doesn't contain i, o, or l 
function chk2(pwd) {
  if ( pwd.includes('i') || pwd.includes('o') || pwd.includes('l') ) {
    return false;
  } else return true; 
}

// 3rd requirement: test for two different non-overlapping pairs
function chk3(pwd) {
  let ch = '';

  for ( let i=1; i < pwd.length; i++ ) {
    if ( pwd[i] === pwd[i-1] ) {
      if (ch === '') ch = pwd[i];
      else if ( ch !== pwd[i] ) return true;

      i++;
    }
  }

  return false;
}

// increment password
function inc(pwd) {
  let subStr = pwd.slice(0,-1);
  let lastChar = pwd.slice(-1);

  if (lastChar === 'z') {
    return inc(subStr) + 'a'
  } else {
    return subStr + String.fromCharCode(lastChar.charCodeAt(0) + 1);
  }

  return ret;
}

// main
let flag = false;

while(true) {
  input = inc(input);
  if ( chk1(input) && chk2(input) && chk3(input) ) {
    console.log(input);

    if (flag) break;
    else flag = true;
  } 
}
