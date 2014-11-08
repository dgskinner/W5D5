var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var absurdBubbleSort = function (arr, sortCompletionCallback) {
  var outerBubbleSortLoop = function (madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true)
};

var innerBubbleSortLoop = function (arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) 
      { askIfLessThan(arr[i], arr[i+1], function (isLessThan) 
        {
          if (!isLessThan) 
            {
              swapped = [arr[i + 1], arr[i]];
              arr[i] = swapped[0], arr[i + 1] = swapped[1];
              madeAnySwaps = true;
            };
          innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
         });
       }
  else { outerBubbleSortLoop(madeAnySwaps); }
};


var askIfLessThan = function (el1, el2, callback){
  reader.question("Is " + el1 + " < " + el2 + "?", function (string1) {
        var answer = string1;
        if (answer === "yes") {callback(true)}
        else if (answer === "no") {callback(false)}
    });
};

absurdBubbleSort([13, 55, 21, 8, 51], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});