public class InsercionDesordenado { // Define la clase principal llamada InsercionDesordenado.

    // Método estático que implementa el algoritmo de ordenamiento por inserción.
    public static void insercion(int[] arr) {
        // Recorre el arreglo desde el segundo elemento hasta el final.
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i]; // Guarda el valor actual que se va a insertar en la posición correcta.
            int j = i - 1;     // Inicializa el índice para comparar con los elementos anteriores.

            // Desplaza los elementos mayores que 'key' una posición hacia la derecha.
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]; // Mueve el elemento hacia la derecha.
                j--;                 // Decrementa el índice para seguir comparando hacia atrás.
            }

            arr[j + 1] = key; // Inserta el valor 'key' en su posición ordenada.
        }
    }

    // Método principal que se ejecuta al iniciar el programa.
    public static void main(String[] args) {
        // Se declara e inicializa un arreglo de enteros desordenado.
        int[] arr = {7, 2, 9, 1, 10, 5, 3, 8, 6, 4};

        // Se imprime el arreglo original.
        System.out.print("Original: ");
        for (int n : arr) System.out.print(n + " ");
        System.out.println(); // Salto de línea.

        // Se llama al método insercion para ordenar el arreglo.
        insercion(arr);

        // Se imprime el arreglo ya ordenado.
        System.out.print("Ordenado: ");
        for (int n : arr) System.out.print(n + " ");
    }
}                    
