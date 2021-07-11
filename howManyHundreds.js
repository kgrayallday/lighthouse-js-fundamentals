var howManyHundreds = function (num) {
  var answer = (num - (num % 100)) / 100;
  return answer;
}

console.log("should equal 5: " + howManyHundreds(520));


