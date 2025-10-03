using System; // Importa el espacio de nombres System para usar funcionalidades como Console.

class InsercionDesordenado // Define una clase llamada InsercionDesordenado.
{
    // Método estático que implementa el algoritmo de ordenamiento por inserción.
    static void InsercionSort(int[] arr)
    {
        // Recorre el arreglo desde el segundo elemento hasta el final.
        for (int i = 1; i < arr.Length; i++)
        {
            int key = arr[i]; // Guarda el valor actual que se va a insertar en la posición correcta.
            int j = i - 1;     // Inicializa el índice para comparar con los elementos anteriores.

            // Desplaza los elementos mayores que 'key' una posición hacia la derecha.
            while (j >= 0 && arr[j] > key)
            {
                arr[j + 1] = arr[j]; // Mueve el elemento hacia la derecha.
                j--;                 // Decrementa el índice para seguir comparando hacia atrás.
            }

            arr[j + 1] = key; // Inserta el valor 'key' en su posición ordenada.
        }
    }

    // Método principal que se ejecuta al iniciar el programa.
    static void Main()
    {
        // Se declara e inicializa un arreglo de enteros desordenado.
        int[] arr = {7, 2, 9, 1, 10, 5, 3, 8, 6, 4};

        // Se imprime el arreglo original.
        Console.Write("Original: ");
        foreach (int n in arr) Console.Write(n + " ");
        Console.WriteLine(); // Salto de línea.

        // Se llama al método InsercionSort para ordenar el arreglo.
        InsercionSort(arr);

        // Se imprime el arreglo ya ordenado.
        Console.Write("Ordenado: ");
        foreach (int n in arr) Console.Write(n + " ");
    }
}
