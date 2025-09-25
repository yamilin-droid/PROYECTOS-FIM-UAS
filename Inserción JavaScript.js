let arr = [7, 2, 9, 1, 10, 5, 3, 8, 6, 4];
console.log("Original:", arr);

function insercion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

insercion(arr);
console.log("Ordenado:", arr);