const memory = function(fn) {
  const cache = {};

  return function(...arg) {
    if (cache[arg]) {
      return cache[arg];
    }

    const result = fn.apply(this, arg);
    cache[arg] = result;
    return result;
  };
};

const fib = function(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

const fibonacci = memory(fib);

console.log(fibonacci(5));
