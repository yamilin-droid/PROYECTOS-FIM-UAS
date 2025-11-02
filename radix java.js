function countingSortExp(arr, exp) {
  const BASE = 10;
  const n = arr.length;
  const count = Array(BASE).fill(0);
  const out = Array(n);

  for (let i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % BASE]++;

  for (let i = 1; i < BASE; i++) count[i] += count[i - 1];

  for (let i = n - 1; i >= 0; i--) {
    const d = Math.floor(arr[i] / exp) % BASE;
    out[--count[d]] = arr[i];
  }

  for (let i = 0; i < n; i++) arr[i] = out[i];
}

function radixSort(arr) {
  if (arr.length === 0) return arr;
  const mx = Math.max(...arr);
  for (let exp = 1; Math.floor(mx / exp) > 0; exp *= 10) {
    countingSortExp(arr, exp);
  }
  return arr;
}

const nums = [8, 75, 35, 21, 32, 32, 65, 0];
console.log(radixSort(nums));