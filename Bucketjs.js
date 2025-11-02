function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
}

function bucketSort(arr) {
  if (arr.length === 0) return arr;
  const mn = Math.min(...arr);
  const mx = Math.max(...arr);
  if (mn === mx) return arr.slice();

  const n = arr.length;
  const k = n;
  const buckets = Array.from({ length: k }, () => []);

  for (const v of arr) {
    const idx = Math.floor(((v - mn) * (k - 1)) / (mx - mn));
    buckets[idx].push(v);
  }

  const res = [];
  for (const b of buckets) {
    insertionSort(b);
    res.push(...b);
  }
  return res;
}

const nums = [7, 23, 45676, 3443676, 21123, 12345];
console.log(bucketSort(nums));