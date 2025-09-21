public class Seleccion {
    public static void seleccion(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int minIdx = i;
            for (int j = i+1; j < arr.length; j++) {
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }

    public static void main(String[] args) {
        int[] lista = {5, 2, 9, 1};
        seleccion(lista);
        System.out.print("Selección: ");
        for (int n : lista) System.out.print(n + " ");
    }
}