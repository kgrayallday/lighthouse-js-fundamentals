const lastIndexOf = function (arr, val) {
  var isMatch = false;
  var result = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      result = i;
      isMatch = true;
      break;
    }
  }
  if (isMatch) {
    return result;
  } else {
    return -1;
  }
}


console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);