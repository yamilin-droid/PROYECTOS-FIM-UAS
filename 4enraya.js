// Juego de 4 en raya (Conecta 4) en consola JavaScript

const ROWS = 6;
const COLS = 7;
const EMPTY = ".";

// Crear tablero vacío
function crearTablero() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY));
}

// Imprimir tablero en consola
function imprimirTablero(tablero) {
    console.clear();
    for (let fila of tablero) {
        console.log(fila.join(" "));
    }
    console.log("0 1 2 3 4 5 6");
}

// Colocar ficha en la columna elegida
function colocarFicha(tablero, col, ficha) {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (tablero[row][col] === EMPTY) {
            tablero[row][col] = ficha;
            return row;
        }
    }
    return -1; // Columna llena
}

// Verificar si hay 4 en línea
function hayGanador(tablero, ficha) {
    // Horizontal, vertical y diagonales
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (
                col + 3 < COLS &&
                tablero[row][col] === ficha &&
                tablero[row][col + 1] === ficha &&
                tablero[row][col + 2] === ficha &&
                tablero[row][col + 3] === ficha
            ) return true;
            if (
                row + 3 < ROWS &&
                tablero[row][col] === ficha &&
                tablero[row + 1][col] === ficha &&
                tablero[row + 2][col] === ficha &&
                tablero[row + 3][col] === ficha
            ) return true;
            if (
                row + 3 < ROWS && col + 3 < COLS &&
                tablero[row][col] === ficha &&
                tablero[row + 1][col + 1] === ficha &&
                tablero[row + 2][col + 2] === ficha &&
                tablero[row + 3][col + 3] === ficha
            ) return true;
            if (
                row - 3 >= 0 && col + 3 < COLS &&
                tablero[row][col] === ficha &&
                tablero[row - 1][col + 1] === ficha &&
                tablero[row - 2][col + 2] === ficha &&
                tablero[row - 3][col + 3] === ficha
            ) return true;
        }
    }
    return false;
}

// Juego principal (requiere Node.js para entrada por teclado)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarColumna(jugador, callback) {
    readline.question(`Jugador ${jugador} (X/O), elige columna (0-6): `, input => {
        const col = parseInt(input);
        if (isNaN(col) || col < 0 || col > 6) {
            console.log("Columna inválida. Intenta de nuevo.");
            preguntarColumna(jugador, callback);
        } else {
            callback(col);
        }
    });
}

function juego() {
    const tablero = crearTablero();
    let turno = 0;
    let movimientos = 0;
    const fichas = ["X", "O"];

    function siguienteTurno() {
        imprimirTablero(tablero);
        const jugador = turno % 2;
        preguntarColumna(fichas[jugador], col => {
            const fila = colocarFicha(tablero, col, fichas[jugador]);
            if (fila === -1) {
                console.log("Columna llena. Elige otra.");
                siguienteTurno();
                return;
            }
            movimientos++;
            if (hayGanador(tablero, fichas[jugador])) {
                imprimirTablero(tablero);
                console.log(`¡Jugador ${fichas[jugador]} gana!`);
                readline.close();
                return;
            }
            if (movimientos === ROWS * COLS) {
                imprimirTablero(tablero);
                console.log("¡Empate!");
                readline.close();
                return;
            }
            turno++;
            siguienteTurno();
        });
    }

    siguienteTurno();
}

juego();
