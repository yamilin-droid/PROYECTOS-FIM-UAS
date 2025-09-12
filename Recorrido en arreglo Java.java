public class Array{
    public static void main(String[] args) {
        int[][] edades ={
            {22,36,43},
            {31,27,19},
            {24,32,47}
        };
    
        int filas = edades.length;
        int columnas = edades[0].length;
        
        for (int i = 0; i < columnas; i++) {
            for (int j = 0; j < filas; j++) {
                System.out.println(edades[i][j] + " ");
            }
            System.out.println();
        }
    }

}
