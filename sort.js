const comparator = function (pivot) {
  return function (a, b) {
    if (a > pivot && b > pivot) {
      return b - a;
    }
    return a - b;
  }
}

const order = function (array, pivot) {
  const customSort = comparator(pivot);

  return array.sort(customSort);
}

console.log(order([3, 5, 7, 1, 9], 5)); //1, 3, 5, 9, 7
console.log(order([1, 8, 3, 6, 5, 4, 7, 2, 9], 5)); //1, 2, 3, 4, 5, 9, 8, 7, 6