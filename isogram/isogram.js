export function isogram(str) {
  let scannedCharacters = {};

  if (str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
      let currentCharacter = str[i];
      if (/[A-Za-z]/.test(currentCharacter)) {
        if (scannedCharacters[currentCharacter] === true) return false;
        scannedCharacters[currentCharacter] = true;
      }
    }
  } else throw new Error('Isogram parameter is either empty, null or undefined');

  return true;
}
