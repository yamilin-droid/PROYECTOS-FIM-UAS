# A.1D Conteo de Pares
arr_1d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Conteo de números pares
conteo_pares = sum(1 for num in arr_1d if num % 2 == 0)

print("Cantidad de números pares:", conteo_pares)