# Función que implementa el algoritmo de ordenamiento burbuja.
def burbuja(arr):
    n = len(arr)  # Se obtiene la longitud del arreglo.

    # Bucle externo que recorre el arreglo completo.
    for i in range(n):
        # Bucle interno que compara elementos adyacentes.
        # El rango se reduce en cada iteración del bucle externo.
        for j in range(0, n - i - 1):
            # Si el elemento actual es mayor que el siguiente, se intercambian.
            if arr[j] > arr[j + 1]:
                # Intercambio de valores usando asignación múltiple.
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Se declara e inicializa una lista de números.
lista = [5, 2, 9, 1, 3, 11]

# Se llama a la función burbuja para ordenar la lista.
burbuja(lista)

# Se imprime la lista ordenada en consola.
print("Burbuja:", lista)
