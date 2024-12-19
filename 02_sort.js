//sorting books in library alphabetically based on case sensitivity is there/not

const convertToLowerCase = function (string) {
  return string.toLowerCase();
}

const comparator = function (sensitivity) {
  return function (a, b) {
    if (sensitivity) {
      return a < b ? -1 : 1;
    }

    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  }
}

const sort = function (books, isCaseSensitive) {
  const sortOrder = comparator(isCaseSensitive);

  return books.sort(sortOrder);
}

console.log(sort(["Anushka", "anushka", "yaar", "YAar", "rohini", "Priyamvada"], true));
console.log(sort(["Anushka", "anushka", "yaar", "YAar", "rohini", "Priyamvada"], false));