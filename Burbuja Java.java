public class Burbuja {
    public static void burbuja(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] lista = {5, 2, 9, 1};
        burbuja(lista);
        System.out.print("Burbuja: ");
        for (int n : lista) System.out.print(n + " ");
    }
}