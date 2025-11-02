import java.util.Arrays;

public class Main {
    private static void countingSortExp(int[] a, int exp) {
        final int BASE = 10;
        int n = a.length;
        int[] count = new int[BASE];
        int[] out = new int[n];

        for (int v : a) count[(v / exp) % BASE]++;

        for (int i = 1; i < BASE; i++) count[i] += count[i - 1];

        for (int i = n - 1; i >= 0; i--) {
            int d = (a[i] / exp) % BASE;
            out[--count[d]] = a[i];
        }

        System.arraycopy(out, 0, a, 0, n);
    }

    public static void radixSort(int[] a) {
        if (a.length == 0) return;
        int mx = a[0];
        for (int v : a) if (v > mx) mx = v;

        for (int exp = 1; mx / exp > 0; exp *= 10)
            countingSortExp(a, exp);
    }

    public static void main(String[] args) {
        int[] nums = {8, 75, 35, 21, 32, 32, 65, 0};
        radixSort(nums);
        System.out.println(Arrays.toString(nums));
    }
}