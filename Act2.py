matriz = [
    [2, 4, 6],
    [1, 3, 5],
    [7, 9, 11]
]

filas = len(matriz)
columnas = len(matriz[0])

for j in range(columnas):
    suma = 0
    for i in range(filas):
        suma += matriz[i][j]
    print(f"Suma de la columna {j + 1}: {suma}")
