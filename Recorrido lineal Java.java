public class Array { 
    public static void main(String[] args) {
        int[] edades = {23, 25, 36, 24, 37, 43, 38};
        //recorriendo los elementos con un ciclo for
        for (int i = 0; i < edades.length; i++) {
            System.out.println("Indice: " + i + "| "+" Valor: " + edades[i]);
        }
        // Insertar (reemplazar valor en la posición 0)
        edades[0] = 29;
        System.out.println("Edades después de añadir 29 remplazando la primera edad: ");
        for (int edad : edades) {
            System.out.println(edad);
        }
        //buscando el elemento 25 con busqueda lineal
        int posi = busquedalineal(edades, 25);
        if (posi != -1) {
            System.out.println("Edad 25 encontrada en indice: " + posi);
        } else {
            System.out.println("Edad 25 no encontrada");
        }
    }
    //metodo para busqueda lineal
    public static int busquedalineal(int[] edades, int buscado) {
        for (int i = 0; i < edades.length; i++) {
            if (edades[i] == buscado) {
                return i; 
            }
        }
        return -1; 
    }
}
