using System; // Importa el espacio de nombres System para usar funcionalidades como Console.

class Seleccion // Define la clase principal llamada Seleccion.
{
    // Método que implementa el algoritmo de ordenamiento por selección.
    static void SeleccionSort(int[] arr)
    {
        // Recorre el arreglo desde el primer hasta el penúltimo elemento.
        for (int i = 0; i < arr.Length; i++)
        {
            int minIdx = i; // Supone que el elemento actual es el mínimo.

            // Busca el índice del menor elemento en el resto del arreglo.
            for (int j = i + 1; j < arr.Length; j++)
            {
                if (arr[j] < arr[minIdx])
                    minIdx = j;
            }

            // Intercambia el elemento actual con el menor encontrado.
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }

    // Método principal que se ejecuta al iniciar el programa.
    static void Main()
    {
        // Se declara e inicializa un arreglo de enteros.
        int[] lista = { 1, 32, 56, 345 };

        // Se llama al método de ordenamiento por selección.
        SeleccionSort(lista);

        // Se imprime el arreglo ya ordenado.
        Console.Write("Selección: ");
        foreach (int n in lista)
            Console.Write(n + " ");
    }
}
