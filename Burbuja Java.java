public class Burbuja { // Define la clase principal llamada Burbuja.

    // Método estático que implementa el algoritmo de ordenamiento burbuja.
    public static void burbuja(int[] arr) {
        // Bucle externo que recorre el arreglo completo.
        for (int i = 0; i < arr.length; i++) {
            // Bucle interno que compara elementos adyacentes y los intercambia si están en orden incorrecto.
            // El rango se reduce con cada pasada, ya que los elementos más grandes se van posicionando al final.
            for (int j = 0; j < arr.length - i - 1; j++) {
                // Si el elemento actual es mayor que el siguiente, se realiza el intercambio.
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];       // Se guarda temporalmente el valor actual.
                    arr[j] = arr[j + 1];     // Se asigna el valor del siguiente al actual.
                    arr[j + 1] = temp;       // Se asigna el valor temporal al siguiente.
                }
            }
        }
    }

    // Método principal que se ejecuta al iniciar el programa.
    public static void main(String[] args) {
        int[] lista = {5, 2, 9, 1}; // Se declara e inicializa un arreglo de enteros.

        burbuja(lista); // Se llama al método burbuja para ordenar el arreglo.

        System.out.print("Burbuja: "); // Se imprime un encabezado en consola.

        // Se recorre el arreglo ordenado e imprime cada elemento separado por espacio.
        for (int n : lista) System.out.print(n + " ");
    }
}
