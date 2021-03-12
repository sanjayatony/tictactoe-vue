var app = new Vue({
  el: "#app",
  data: {
    boardSize: 3,
    squares: Array(9).fill(null),
    allBoards: 0,
    xIsNext: true,
    winner: null,
    gridStyle: "repeat(3, minmax(0, 1fr))",
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
    },
    checkWinner() {
      console.log("checking for a winner");
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      let winner = null;
      lines.forEach(([a, b, c]) => {
        if (
          this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
        ) {
          console.log("winner found", this.squares[a]);
          winner = this.squares[a];
        }
      });
      return winner;
    },
    newGame() {
      this.xIsNext = true;
      this.winner = null;
      this.allBoards = this.boardSize * this.boardSize;
      this.squares = Array(this.allBoards).fill(null);
      this.gridStyle = `repeat(${this.boardSize}, minmax(0, 1fr))`;
    },
  },
});
