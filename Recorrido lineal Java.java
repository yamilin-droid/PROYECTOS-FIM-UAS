public class Array { 
    public static void main(String[] args) {
        int[] edades = {23, 25, 36, 24, 37, 43, 38};
        
        for (int i = 0; i < edades.length; i++) {
            System.out.println("Indice: " + i + "| "+" Valor: " + edades[i]);
        }
      
        edades[0] = 29;
        System.out.println("Edades después de añadir 29 remplazando la primera edad: ");
        for (int edad : edades) {
            System.out.println(edad);
        }
        
        int posi = busquedalineal(edades, 25);
        if (posi != -1) {
            System.out.println("Edad 25 encontrada en indice: " + posi);
        } else {
            System.out.println("Edad 25 no encontrada");
        }
    }
    public static int busquedalineal(int[] edades, int buscado) {
        for (int i = 0; i < edades.length; i++) {
            if (edades[i] == buscado) {
                return i; 
            }
        }
        return -1; 
    }
}

