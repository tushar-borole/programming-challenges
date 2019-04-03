const fibonacci = function(n) {
  let temp = [0, 1];
  let i = 1;

  while (i <= n) {
    temp.push(temp[i] + temp[i - 1]);
    i++;
  }

  return temp;
};

console.log(fibonacci(12));
