# A.3D Buscar valor
matriz_3d = [
    [
        [1, 2], 
        [3, 4]
    ],
    [
        [5, 6], 
        [7, 8]
    ]
]

valor_buscado = 6

# Búsqueda del valor
encontrado = any(valor_buscado in fila for plano in matriz_3d for fila in plano)

print("Valor encontrado:" if encontrado else "Valor no encontrado.")
