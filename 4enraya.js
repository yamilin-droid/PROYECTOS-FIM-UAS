const board = [
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ']
];

let currentPlayer = 'X';
let moves = 0;

function printBoard() {
  console.log('  0 1 2 3');
  for (let i = 0; i < 4; i++) {
    let row = `${i} `;
    for (let j = 0; j < 4; j++) {
      row += board[i][j] + ' ';
    }
    console.log(row);
  }
}

function isValidMove(row, col) {
  return row >= 0 && row < 4 && col >= 0 && col < 4 && board[row][col] === ' ';
}

function checkWin() {
  
  for (let i = 0; i < 4; i++) {
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer &&
      board[i][3] === currentPlayer
    ) return true;
    if (
      board[0][i] === currentPlayer &&
      board[1][i] === currentPlayer &&
      board[2][i] === currentPlayer &&
      board[3][i] === currentPlayer
    ) return true;
  }
  
  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer &&
    board[3][3] === currentPlayer
  ) return true;
  if (
    board[0][3] === currentPlayer &&
    board[1][2] === currentPlayer &&
    board[2][1] === currentPlayer &&
    board[3][0] === currentPlayer
  ) return true;
  return false;
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function askMove() {
  printBoard();
  readline.question(`Turno de ${currentPlayer}. Ingresa fila y columna (ejemplo: 1 2): `, input => {
    const [row, col] = input.split(' ').map(Number);
    if (!isValidMove(row, col)) {
      console.log('¡Jugada inválida! Intenta de nuevo.');
      askMove();
      return;
    }
    board[row][col] = currentPlayer;
    moves++;
    if (checkWin()) {
      printBoard();
      console.log(¡El jugador ${currentPlayer} ha ganado!);
      readline.close();
      return;
    }
    if (moves === 16) {
      printBoard();
      console.log('¡Empate!');
      readline.close();
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    askMove();
  });
}

askMove();