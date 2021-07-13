const range = function (start, end, step) {
  let step_array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return step_array;
  } else if (start > end) {
    return step_array;
  } else if (step < 1) {
    return step_array;
  } else {
    for (let i = start; i <= end; i += step) {
      step_array.push(i);
      console.log(step_array);
    }
  } return step_array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
