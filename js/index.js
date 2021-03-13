var app = new Vue({
  el: "#app",
  data: {
    gridSize: 3,
    boards: 0,
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    winLines: Array(),
    gridStyle: "repeat(3, minmax(0, 1fr))",
    winCondition: Array(),
    xCoords: Array(),
    oCoords: Array(),
  },
  computed: {
    player() {
      return this.xIsNext ? "X" : "O";
    },
  },
  methods: {
    makeMove(index) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.checkWinner();
      console.log(this.winner, this.checkWinner());
      console.log(this.squares);
    },
    genWinLines() {
      let size = parseInt(this.gridSize);
      let horizontal = "";
      let vertical = "";
      let diagonal1 = "";
      let diagonal2 = "";
      let winArr = Array();
      for (let j = 0; j < size; j++) {
        horizontal = "";
        vertical = "";
        for (let i = 0; i < this.boards; i++) {
          if (i / size == j) {
            horizontal += i + ",";
            for (let k = 1; k < size; k++) {
              horizontal += i + k + ",";
            }
          }
          if (i % size == j) {
            vertical += i + ",";
          }
        }
        horizontal = horizontal.substring(0, horizontal.length - 1);
        vertical = vertical.substring(0, vertical.length - 1);
        const h = horizontal.split(",");
        const v = vertical.split(",");
        winArr[j] = v;
        winArr[j + size] = h;
        diagonal1 += j * (size + 1) + ",";
        diagonal2 += (j + 1) * (size - 1) + ",";
      }
      diagonal1 = diagonal1.substring(0, diagonal1.length - 1);
      diagonal1 = diagonal1.split(",");
      winArr.push(diagonal1);

      diagonal2 = diagonal2.substring(0, diagonal2.length - 1);
      diagonal2 = diagonal2.split(",");
      winArr.push(diagonal2);
      console.log(winArr);
      this.winCondition = winArr;
    },
    checkWinner() {
      console.log("checking for a winner");
      // this.xCoords.push(this.squares.indexOf("X"));
      // this.oCoords.push(this.squares.indexOf("O"));
      // console.log(this.xCoords);
      // console.log(this.oCoords);
      // for (let a = 0; a < this.winCondition.length; a++) {
      //   let flag = false;
      //   for (let b = 0; b < this.gridSize; b++) {
      //     //console.log(a + "," + b);
      //   }
      // }
    },
    newGame() {
      this.xIsNext = true;
      this.winner = null;
      this.boards = this.gridSize * this.gridSize;
      this.squares = Array(this.boards).fill(null);
      this.gridStyle = `repeat(${this.gridSize}, minmax(0, 1fr))`;
      this.genWinLines();
    },
  },
});
