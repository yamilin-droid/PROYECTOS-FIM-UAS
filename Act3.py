matriz = [
    [  
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [   
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ],
    [  
        [19, 20, 21],
        [22, 23, 24],
        [25, 26, 27]
    ]
]

valor = int(input("Ingrese el número a buscar: "))
encontrado = False

for k in range(len(matriz)):         
    for i in range(len(matriz[k])):    
        for j in range(len(matriz[k][i])): 
            if matriz[k][i][j] == valor:
                print(f"Valor {valor} encontrado en capa {k}, fila {i}, columna {j}")
                encontrado = True

if not encontrado:
    print(f"El valor {valor} no se encuentra en la matriz.")
