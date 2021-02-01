// function declaration --- Declaração de função tradicional
// Vantagem desse tipo de declaração - antes da sua declaração ela pode ser chamada. Porque o interpretador do JS primeiro carregas as funções do arquivo declaradas dessa formas e depois executa o seu codigo. 

function soma(x, y) {
    return x + y
    }
console.log(soma(2,3))

// function expression --- Criar função anonima e atribuir a uma variavel ou constante

const subtracao = function (a, b) {
return a - b
}
console.log(subtracao(4,3))

// namerd function expression --- atribuir uma função tradicional a uma variável ou constante - não é muito usado

let mult = function mult(a, b) {
    return a * b
}

console.log(mult(5, 4))

