
//Em um Array
const notas = [8.1, 7.5, 9.7, 5.5]

for (let i in notas) { //Pegar atributos ou indices de um array
    console.log(i, notas[i])
}

//Em um Objeto

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
