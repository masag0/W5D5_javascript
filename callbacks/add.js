const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number: ", function (answer) {
      let number = parseInt(answer);
      sum += number;
      numsLeft--;
      console.log(`Sum: ${sum}`);
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
  else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
