# A.2D – Ordenar por Filas
matriz_2d = [
    [3, 1, 2],
    [9, 5, 6],
    [7, 8, 4]
]

# Ordenar cada fila
matriz_ordenada = [sorted(fila) for fila in matriz_2d]

print("Matriz con filas ordenadas:")
for fila in matriz_ordenada:
    print(fila)
