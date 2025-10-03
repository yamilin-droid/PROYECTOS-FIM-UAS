# A.2D Suma de columnas
matriz_2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Transponer la matriz y sumar por columnas
suma_columnas = [sum(col) for col in zip(*matriz_2d)]

print("Suma por columnas:", suma_columnas)
