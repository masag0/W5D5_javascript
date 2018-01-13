const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor() {
    this.stacks = [[1,2,3], [], []];
  }

  promptMove(callback, completionCallback) {
    let moved;
    console.log(this.stacks);
    reader.question("Enter move:", (answer) => {
      let fromTower = answer.slice(0,1);
      let toTower = answer.slice(2);
      moved = callback(fromTower, toTower);
      if (!moved) {
        console.log("Invalid move");
        
      }
      else {
        reader.close();
        return true;
      }


    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.stacks[startTowerIdx].length === 0) {
      return false;
    }
    else if (this.stacks[endTowerIdx].length !== 0 &&
      this.stacks[startTowerIdx][this.stacks.length-1] > this.stacks[endTowerIdx][this.stacks.length-1]) {
      return false;
    }
    else {
      return true;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      return true;
    }
    else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.stacks));
  }

  isWon() {
    if (this.stacks[0].length === 0 && (this.stacks[1].length === 3 || this.stacks[2].length === 3)) {
      return true;
    }
    else {
      return false;
    }
  }

  run(completionCallback) {
    // while (true) {
      let moved = this.promptMove(this.move);
      // if (moved === false) {
      //   console.log("Invalid move");
      // }
    // }
  }
}

reader.close();
let game = new Game();
// game.promptMove(console.log);
// game.move(0, 1);
// game.move(2, 0);
// console.log(game.isWon());
game.run(console.log);
// game.print();
