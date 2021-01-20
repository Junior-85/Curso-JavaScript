//Exemplo começa com a montagem de um While
let contador = 1
while(contador <= 10){ //Expressão se continua ou não o laço
    console.log(contador)
    contador++
}

//Contador com FOR

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

//Usando contador para percorrer um Array 

const notas = [8.1, 7.5, 9.7, 5.5]

for (let i = 0; i <= notas.length; i++){
    console.log(`A nota ${notas[i]}`)
}