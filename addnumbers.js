var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function (sum, numsLeft, completionCallback){
  if (numsLeft === 0) { completionCallback(sum)
  } else {
    reader.question("Enter a number", function (numString1) {
      var num1 = parseInt(numString1);
      sum = sum + num1;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
};


addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});


var b = function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
}

b(54);