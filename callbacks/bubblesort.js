const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function absurdBubbleSort(arr, sortCompletionCallback) {
  let i = 0;
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  let madeAnySwaps = true;
  outerBubbleSortLoop(madeAnySwaps);
  return arr;
}

function askIfGreaterThan(el1,el2,callback) {
  reader.question(`is ${el1} greater than ${el2}?`, function(answer) {
    if (answer === 'yes') {
      callback(true);
    }
    else if (answer === 'no') {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    madeAnySwaps = false;
    askIfGreaterThan(arr[i],arr[i+1], function(boolean){
      if (boolean === true) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      // else {
      //   madeAnySwaps = false;
      // }
      console.log(arr);
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }

}


// askIfGreaterThan(1,2,console.log);
// innerBubbleSortLoop([2,1,3],0, true, console.log);
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
