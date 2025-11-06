function hashSort(arr) {
  const counts = new Map();
  for (const v of arr) counts.set(v, (counts.get(v) || 0) + 1);
  const keys = Array.from(counts.keys()).sort((a, b) => a - b);
  const out = [];
  for (const k of keys) for (let c = counts.get(k); c-- > 0; ) out.push(k);
  return out;
}

const data = [23, 65, 0, 12, 23, 63];
console.log(hashSort(data)); // [0, 12, 23, 23, 63, 65]