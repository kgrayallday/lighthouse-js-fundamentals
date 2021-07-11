var calculateRectangleArea = function (length, width) {
  if (length * width < 0) {
    return;
  } else {
    return length * width;
  }
}

var calculateTriangleArea = function (base, height) {
  //base X height /2
  if (base * height / 2 < 0) {
    return;
  } else {
    return base * height / 2;
  }

}

var calculateCircleArea = function (radius) {
  //use Math.pi
  if (Math.PI * (radius * radius) < 0) {
    return;
  } else {
    return Math.PI * (radius * radius);
  }

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


