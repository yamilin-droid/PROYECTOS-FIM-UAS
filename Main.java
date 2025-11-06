import java.util.*;

public class Main {
  public static int[] hashsort(int[] arr) {
    Map<Integer, Integer> counts = new HashMap<>();
    for (int v : arr) counts.put(v, counts.getOrDefault(v, 0) + 1);
    List<Integer> keys = new ArrayList<>(counts.keySet());
    Collections.sort(keys);
    int[] out = new int[arr.length];
    int idx = 0;
    for (int k : keys) {
      int c = counts.get(k);
      for (int i = 0; i < c; i++) out[idx++] = k;
    }
    return out;
  }

  public static void main(String[] args) {
    int[] data = {23, 65, 0, 12, 23, 63};
    System.out.println(Arrays.toString(hashsort(data))); // [0, 12, 23, 23, 63, 65]
  }
}