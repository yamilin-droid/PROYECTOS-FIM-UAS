public class Array { // Define la clase principal llamada Array.

    public static void main(String[] args) {
        // Se declara e inicializa una matriz bidimensional de enteros con 3 filas y 3 columnas.
        int[][] edades = {
            {22, 36, 43},
            {31, 27, 19},
            {24, 32, 47}
        };

        // Se obtiene el número de filas de la matriz.
        int filas = edades.length;

        // Se obtiene el número de columnas de la matriz (asumiendo que todas las filas tienen la misma longitud).
        int columnas = edades[0].length;

        // Bucle externo que recorre las columnas de la matriz.
        for (int i = 0; i < columnas; i++) {
            // Bucle interno que recorre las filas de la matriz.
            for (int j = 0; j < filas; j++) {
                // Imprime el valor en la posición [i][j].
                // ⚠️ Aquí hay un error: se está accediendo a edades[i][j], lo cual recorre por filas.
                // Pero como el bucle externo usa 'i' como índice de columna, debería ser edades[j][i].
                System.out.println(edades[i][j] + " ");
            }
            // Imprime un salto de línea después de cada columna.
            System.out.println();
        }
    }
}
