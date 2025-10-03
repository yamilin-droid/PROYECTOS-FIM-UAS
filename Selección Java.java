public class Seleccion { // Define la clase principal llamada Seleccion.

    // Método que implementa el algoritmo de ordenamiento por selección.
    public static void seleccion(int[] arr) {
        // Recorre el arreglo desde el primer hasta el penúltimo elemento.
        for (int i = 0; i < arr.length; i++) {
            int minIdx = i; // Supone que el elemento actual es el mínimo.

            // Busca el índice del menor elemento en el resto del arreglo.
            for (int j = i + 1; j < arr.length; j++) {
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
    public static void main(String[] args) {
        // Se declara e inicializa un arreglo de enteros.
        int[] lista = {5, 2, 9, 1};

        // Se llama al método de ordenamiento por selección.
        seleccion(lista);

        // Se imprime el arreglo ya ordenado.
        System.out.print("Selección: ");
        for (int n : lista)
            System.out.print(n + " ");
    }
}
