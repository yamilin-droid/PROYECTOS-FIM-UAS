// Se declara una variable 'a' y se le asigna el valor numérico 1
let a = 1;

// Se declara una variable 'b' y se le asigna el valor numérico 2
let b = 2;

// Se declara una variable 'c' y se le asigna el valor numérico 3
let c = 3;

// Se crea un arreglo llamado 'arr' que contiene los valores de las variables a, b y c
// El arreglo resultante será: [1, 2, 3]
let arr = [a, b, c];

// Se imprime en consola el primer elemento del arreglo (índice 0), que es el valor de 'a' (1)
console.log(arr[0]);

// Se modifica el segundo elemento del arreglo (índice 1), cambiando el valor de 'b' de 2 a 20
arr[1] = 20;

// Se inicia un ciclo for que recorre el arreglo desde el índice 0 hasta el último índice
for (let i = 0; i < arr.length; i++) {
    // En cada iteración, se imprime el valor actual del arreglo en la posición 'i'
    // Esto mostrará: 1, 20, 3
    console.log(arr[i]);
}
