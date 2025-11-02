import java.util.*;

public class Main {
    static void insertionSort(List<Integer> a) {
        for (int i = 1; i < a.size(); i++) {
            int key = a.get(i);
            int j = i - 1;
            while (j >= 0 && a.get(j) > key) {
                a.set(j + 1, a.get(j));
                j--;
            }
            a.set(j + 1, key);
        }
    }

    static int[] bucketSort(int[] arr) {
        if (arr.length == 0) return arr;
        int mn = arr[0], mx = arr[0];
        for (int v : arr) { if (v < mn) mn = v; if (v > mx) mx = v; }
        if (mn == mx) return Arrays.copyOf(arr, arr.length);

        int n = arr.length;
        int k = n;
        List<List<Integer>> buckets = new ArrayList<>(k);
        for (int i = 0; i < k; i++) buckets.add(new ArrayList<>());

        for (int v : arr) {
            int idx = (int)(((long)(v - mn) * (k - 1)) / (mx - mn));
            buckets.get(idx).add(v);
        }

        int[] res = new int[arr.length];
        int pos = 0;
        for (List<Integer> b : buckets) {
            insertionSort(b);
            for (int v : b) res[pos++] = v;
        }
        return res;
    }

    public static void main(String[] args) {
        int[] nums = {7, 23, 45676, 3443676, 21123, 12345};
        int[] sorted = bucketSort(nums);
        System.out.println(Arrays.toString(sorted));
    }
}