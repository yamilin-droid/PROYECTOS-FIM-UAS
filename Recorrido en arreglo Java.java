public class Array{
    //creando un arreglo (matriz)
    public static void main(String[] args) {
        int[][] edades ={
            {22,36,43},
            {31,27,19},
            {24,32,47}
        };
        //devolviendo el tamaño de las filas
        int filas = edades.length;
        int columnas = edades[0].length;
        //recorriendo el arreglo por columnas con un ciclo anidado
        for (int i = 0; i < columnas; i++) {
            for (int j = 0; j < filas; j++) {
                System.out.println(edades[i][j] + " ");
            }
            System.out.println();
        }
    }
}