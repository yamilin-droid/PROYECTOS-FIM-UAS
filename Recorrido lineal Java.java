public class Array { // Define la clase principal llamada Array.

    public static void main(String[] args) {
        // Se declara e inicializa un arreglo de enteros llamado 'edades'.
        int[] edades = {23, 25, 36, 24, 37, 43, 38};

        // Se recorre el arreglo e imprime cada índice junto con su valor.
        for (int i = 0; i < edades.length; i++) {
            System.out.println("Indice: " + i + "| " + " Valor: " + edades[i]);
        }

        // Se modifica el primer elemento del arreglo, reemplazando 23 por 29.
        edades[0] = 29;

        // Se imprime el arreglo después de modificar el primer valor.
        System.out.println("Edades después de añadir 29 remplazando la primera edad: ");
        for (int edad : edades) {
            System.out.println(edad);
        }

        // Se realiza una búsqueda lineal del valor 25 en el arreglo.
        int posi = busquedalineal(edades, 25);

        // Se imprime el resultado de la búsqueda.
        if (posi != -1) {
            System.out.println("Edad 25 encontrada en indice: " + posi);
        } else {
            System.out.println("Edad 25 no encontrada");
        }
    }

    // Método que realiza una búsqueda lineal en el arreglo.
    public static int busquedalineal(int[] edades, int buscado) {
        // Recorre el arreglo buscando el valor especificado.
        for (int i = 0; i < edades.length; i++) {
            if (edades[i] == buscado) {
                return i; // Retorna el índice si se encuentra el valor.
            }
        }
        return -1; // Retorna -1 si el valor no se encuentra en el arreglo.
    }
}
