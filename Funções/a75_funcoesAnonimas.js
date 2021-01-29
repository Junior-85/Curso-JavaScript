const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

console.log(soma(5, 5))

imprimirResultado(3, 4)

imprimirResultado(3, 4, function (x, y) {
    return x * y
})

// Com arrow function
imprimirResultado(3, 4, (x, y) => x * y)

//Função anonima dentro de um objeto
const pessoa = { 
falar: function () {
    return ('Opa') //O que eu quero que a função faça
}
}

console.log(pessoa.falar())

