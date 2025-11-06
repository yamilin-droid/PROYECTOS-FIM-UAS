import java.util.Arrays;

public class Main {
    static int partition(int[] a, int low, int high) {
        int pivot = a[high];
        int i = low;
        for (int j = low; j < high; j++) {
            if (a[j] <= pivot) {
                int tmp = a[i]; a[i] = a[j]; a[j] = tmp;
                i++;
            }
        }
        int tmp = a[i]; a[i] = a[high]; a[high] = tmp;
        return i;
    }

    static void quickSort(int[] a, int low, int high) {
        if (low < high) {
            int p = partition(a, low, high);
            quickSort(a, low, p - 1);
            quickSort(a, p + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] nums = {8, 75, 35, 21, 32, 32, 65, 0};
        quickSort(nums, 0, nums.length - 1);
        System.out.println(Arrays.toString(nums));
    }
}