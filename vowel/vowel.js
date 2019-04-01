const vowel = function(str) {
  let vowelCount = 0;
  const strArr = str.toLowerCase().split("");
  for (char of strArr) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

vowel("tushariscooslter"); //?
