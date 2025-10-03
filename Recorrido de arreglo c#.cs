using System; // Importa el espacio de nombres System para usar funcionalidades como Console.

class Program // Define la clase principal llamada Program.
{
    // Método estático que imprime los elementos de una matriz por columnas.
    static void Array()
    {
        // Se declara e inicializa una matriz bidimensional de enteros.
        int[,] edades = {
            {22, 36, 43},
            {28, 19, 31},
            {31, 27, 19}
        };

        // Se obtiene el número de filas de la matriz.
        int filas = edades.GetLength(0);

        // Se obtiene el número de columnas de la matriz.
        int columnas = edades.GetLength(1);

        // Bucle externo que recorre las columnas de la matriz.
        for (int j = 0; j < columnas; j++)
        {
            // Bucle interno que recorre las filas de la matriz.
            for (int i = 0; i < filas; i++)
            {
                // Imprime el valor en la posición [i, j], recorriendo la matriz por columnas.
                Console.Write(edades[i, j] + " ");
            }

            // Imprime un salto de línea después de cada columna.
            Console.WriteLine();
        }
    }
}
