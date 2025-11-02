function partition(a, low, high) {
  const pivot = a[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (a[j] <= pivot) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }
  [a[i], a[high]] = [a[high], a[i]];
  return i;
}

function quickSort(a, low, high) {
  if (low < high) {
    const p = partition(a, low, high);
    quickSort(a, low, p - 1);
    quickSort(a, p + 1, high);
  }
}

const nums = [8, 75, 35, 21, 32, 32, 65, 0];
quickSort(nums, 0, nums.length - 1);
console.log(nums);