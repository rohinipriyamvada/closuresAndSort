const isNotDivisible = function (divisor) {
  return function (dividend) {
    return dividend % divisor !== 0;
  }
}

const sort = function (array, number) {
  const predicate = isNotDivisible(number);

  return array.filter(predicate).sort(function (a, b) { return a - b; });
}

console.log(sort([1, 3, 5, 15, 23, 19, 25], 5));