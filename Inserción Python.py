# Se declara e inicializa una lista de números desordenados.
arr = [7, 2, 9, 1, 10, 5, 3, 8, 6, 4]

# Se imprime la lista original antes de ordenarla.
print("Original:", arr)

# Función que implementa el algoritmo de ordenamiento por inserción.
def insercion(arr):
    # Recorre la lista desde el segundo elemento hasta el final.
    for i in range(1, len(arr)):
        key = arr[i]   # Guarda el valor actual que se va a insertar en la posición correcta.
        j = i - 1      # Inicializa el índice para comparar con los elementos anteriores.

        # Desplaza los elementos mayores que 'key' una posición hacia la derecha.
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]  # Mueve el elemento hacia la derecha.
            j -= 1               # Decrementa el índice para seguir comparando hacia atrás.

        arr[j + 1] = key  # Inserta el valor 'key' en su posición ordenada.

# Se llama a la función insercion para ordenar la lista.
insercion(arr)

# Se imprime la lista ya ordenada.
print("Ordenado:", arr)
