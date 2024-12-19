const comparator = function (customOrder) {
  return function (a, b) {
    let direction = 1;

    if (customOrder === 'descending') {
      direction = -1;
    }

    return (a.length - b.length) * direction;
  }
}

const sort = function (strings, typeToSort) {
  const sortOrder = comparator(typeToSort);

  return strings.sort(sortOrder);
}

console.log(sort(["a", "aaaa", "aa", "aaa"], 'ascending'));
console.log(sort(["a", "aaaa", "aa", "aaa"], 'descending'));