let edades = [23,25,36,24,37,43,38];

console.log("Edades: ");
for(let i = 0; i < edades.length; i++) {
    console.log("Indice: " + i + "| Edad: " + edades[i])
}

edades[3] = 19;
console.log("Edades despues de remplazar la edad del indice 3: ")
for(let edad of edades) {
    console.log(edad)
}

function busqueda_lineal(edades, buscado) {
    for(let i = 0; i < edades.length; i++) {
        if(edades[i] == buscado) {
             return i
        }
    }
    return -1
}

let pos = busqueda_lineal(edades, 25)
if (pos !== -1) {
    console.log("La edad 25 se encuentra en el indice: " + pos)
} else {
    console.log("La edad 25 no se encuentra")

}
