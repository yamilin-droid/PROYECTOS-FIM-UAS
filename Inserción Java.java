public class InsercionDesordenado {
    public static void insercion(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {7, 2, 9, 1, 10, 5, 3, 8, 6, 4};
        System.out.print("Original: ");
        for (int n : arr) System.out.print(n + " ");
        System.out.println();

        insercion(arr);

        System.out.print("Ordenado: ");
        for (int n : arr) System.out.print(n + " ");
    }
}