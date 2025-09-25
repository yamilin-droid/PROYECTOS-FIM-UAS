arr = [7, 2, 9, 1, 10, 5, 3, 8, 6, 4]
print("Original:", arr)

def insercion(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

insercion(arr)
print("Ordenado:", arr)