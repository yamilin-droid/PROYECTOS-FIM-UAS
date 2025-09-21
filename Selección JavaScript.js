function seleccion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}

let lista = [5, 2, 1, 10];
seleccion(lista);
console.log("Selección:", lista);