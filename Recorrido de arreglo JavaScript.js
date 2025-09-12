let edades= [
    [22,36,43],
    [28,19,31],
    [31,27,19]
];

let filas = edades.length;
let columnas = edades[0].length;

for(let j = 0; j < columnas; j ++) {
    for(let i = 0; i < filas; i ++){
        console.log(edades[i][j]);
    }
    console.log()
}

