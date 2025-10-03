# A.1D – Eliminar Duplicados
arr_1d = [1, 2, 2, 3, 4, 3, 5, 1]

# Usar un conjunto para rastrear los elementos ya vistos
vistos = set()
resultado = []

for num in arr_1d:
    if num not in vistos:
        resultado.append(num)
        vistos.add(num)

print("Sin duplicados:", resultado)