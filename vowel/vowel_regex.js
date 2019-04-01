const vowel = function(str) {
  const matches = str.match(/[aeiou]/gi);
  const count = matches ? matches.length : 0;
  return count;
};

console.log(vowel("tushariscoolste"));
