
// generate full Character set array
function generateCharSet(start,finish) {
pwdCharSet=[];
charNo = start;
for (n=0; n<finish-start+1; n++)
  {pwdCharSet[n] = String.fromCharCode(charNo);
  charNo += 1;}
return pwdCharSet;
}

// read the char code range for typical characters and select out the special characters //
function generateSpcChars() {
  Post = 0;
  spclCharSet = []
  for (n=33;n<127;n++) {
    testChar = String.fromCharCode(n)
    if (/[^A-Za-z0-9]/.test(testChar)) {
      spclCharSet[Post] = testChar;
      Post += 1;
      }
  }
  return spclCharSet;
}

function generateRndmInt(start, end) {
  rndmInt = Math.floor(Math.random()*(end-start+1))+start;
  return rndmInt;
  }

function generateRndmChar(start, end) {
    rndmChar = String.fromCharCode(generateRndmInt(start,end));
    return rndmChar;
  }
