def insertion_sort(a):
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = key

def bucket_sort(arr):
    if not arr:
        return arr
    mn, mx = min(arr), max(arr)
    if mn == mx:
        return arr[:]
    n = len(arr)
    k = n  # número de buckets
    buckets = [[] for _ in range(k)]
    for v in arr:
        idx = (v - mn) * (k - 1) // (mx - mn)
        buckets[idx].append(v)
    res = []
    for b in buckets:
        insertion_sort(b)
        res.extend(b)
    return res

if __name__ == "__main__":
    nums = [7, 23, 45676, 3443676, 21123, 12345]
    print(bucket_sort(nums))