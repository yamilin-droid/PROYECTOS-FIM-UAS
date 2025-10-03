# Función que implementa el algoritmo de ordenamiento por selección.
def seleccion(arr):
    # Recorre el arreglo desde el primer hasta el penúltimo elemento.
    for i in range(len(arr)):
        min_idx = i  # Supone que el elemento actual es el mínimo.

        # Busca el índice del menor elemento en el resto del arreglo.
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j

        # Intercambia el elemento actual con el menor encontrado.
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Se declara e inicializa una lista de enteros.
lista = [7, 4, 23, 0]

# Se llama a la función de ordenamiento por selección.
seleccion(lista)

# Se imprime la lista ya ordenada.
print("Selección:", lista)
