module.exports = function (word) {
  const checkedLetters = [];
  const splitWord = word.split("")

  for (let i = 0; i < splitWord.length; i++) {
    if (checkedLetters.includes(splitWord[i])) {
      return false;
    }
    checkedLetters.push(splitWord[i]);
  }
  return true
};