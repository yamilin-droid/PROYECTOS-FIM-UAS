using System; // Importa el espacio de nombres System, necesario para usar funcionalidades básicas como Console.

class Burbuja // Define una clase llamada Burbuja.
{
    // Método estático que implementa el algoritmo de ordenamiento burbuja.
    static void BurbujaSort(int[] arr)
    {
        // Bucle externo que recorre todo el arreglo.
        for (int i = 0; i < arr.Length; i++)
        {
            // Bucle interno que compara elementos adyacentes.
            // Se reduce el rango en cada iteración del bucle externo.
            for (int j = 0; j < arr.Length - i - 1; j++)
            {
                // Si el elemento actual es mayor que el siguiente, se intercambian.
                if (arr[j] > arr[j + 1])
                {
                    // Se guarda temporalmente el valor actual.
                    int temp = arr[j];
                    // Se asigna el valor del siguiente elemento al actual.
                    arr[j] = arr[j + 1];
                    // Se asigna el valor temporal al siguiente elemento.
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // Método principal que se ejecuta al iniciar el programa.
    static void Main()
    {
        // Se declara e inicializa un arreglo de enteros.
        int[] lista = {2, 1, 500, 1000};

        // Se llama al método BurbujaSort para ordenar el arreglo.
        BurbujaSort(lista);

        // Se imprime un encabezado en consola.
        Console.Write("Burbuja: ");

        // Se recorre el arreglo ordenado e imprime cada elemento.
        foreach (int n in lista) Console.Write(n + " ");
    }
}
