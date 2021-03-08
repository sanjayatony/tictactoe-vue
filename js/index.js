var app = new Vue({
  el: "#app",
  data: {
    squares: Array(9).fill(null),
    xIsNext: true,
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
    },
    newGame() {
      this.squares = Array(9).fill(null);
      this.xIsNext = true;
      this.winner = null;
    },
  },
});
