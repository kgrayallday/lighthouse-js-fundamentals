function concat(firstArray, secondArray) {

  var newArray = [];
  firstArray.forEach(function (item, index, array) {
    newArray.push(item);
  });

  secondArray.forEach(function (item, index, array) {
    newArray.push(item);
  });
  console.log(newArray);
  return newArray;

}


console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);