//Armazenando uma função em Uma Variável

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma (2, 3)

//Armazenar uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//Retorno implicito

const subtracao = (a, b) => a -b
console.log(subtracao(3, 2))
