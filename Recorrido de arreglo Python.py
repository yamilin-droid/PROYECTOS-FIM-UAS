# Se declara una matriz bidimensional llamada 'edades' con 3 filas y 3 columnas.
edades = [
    [22, 45, 36],
    [28, 19, 31],
    [23, 43, 38]
]

# Se obtiene el número de filas de la matriz.
filas = len(edades)

# Se obtiene el número de columnas de la matriz (asumiendo que todas las filas tienen la misma longitud).
columnas = len(edades[0])

# Bucle externo que recorre las columnas de la matriz.
for j in range(columnas):
    # Bucle interno que recorre las filas de la matriz.
    for i in range(filas):
        # Imprime el valor en la posición [i][j], recorriendo la matriz por columnas.
        print(edades[i][j], end=" ")
    # Imprime un salto de línea después de cada columna.
    print()
