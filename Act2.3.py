# A.3D – Promedio por Capa
matriz_3d = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
]

# Calcular el promedio por capa
promedios = []

for capa in matriz_3d:
    suma = sum(sum(fila) for fila in capa)
    cantidad = sum(len(fila) for fila in capa)
    promedio = suma / cantidad
    promedios.append(promedio)

print("Promedio por capa:", promedios)
