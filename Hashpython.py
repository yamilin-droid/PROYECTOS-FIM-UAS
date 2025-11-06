from typing import List, Dict

def hashsort(arr: List[int]) -> List[int]:
  counts: Dict[int, int] = {}
  for v in arr:
    counts[v] = counts.get(v, 0) + 1
  out: List[int] = []
  for k in sorted(counts.keys()):
    out.extend([k] * counts[k])
  return out

data = [23, 65, 0, 12, 23, 63]
print(hashsort(data))  # [0, 12, 23, 23, 63, 65]