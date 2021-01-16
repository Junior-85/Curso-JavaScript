Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imiprimiResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida!')
    }
}

imiprimiResultado(10)
imiprimiResultado(8.9)
imiprimiResultado(6.55)
imiprimiResultado(2.3)
imiprimiResultado(-1)
imiprimiResultado(11)

//CODIGO SIMPLIFICADO IF, ELSE, IF ELSE
const situacaoAluno = function (nota) {
    if (nota >= 9 && nota <= 10) {
        console.log('Aluno Aprovado com Mérito!!!')
    } else if (nota < 9 && nota >= 6.5) {
        console.log(`Nota ${nota}. Aluno Aprovado!`)
    } else if (nota < 6 && nota >= 5) {
        console.log(`Nota ${nota}. Aluno em Recuperação!`)

    } else if (nota < 5 && nota >= 0) {
        console.log(`Nota ${nota}. Aluno REPROVADO!!!`)
    }
    else {
        console.log('Nota inválida')
    }
}

console.log('-')
console.log('--- Situação do Aluno ---')
console.log('---')
situacaoAluno(9.5)
console.log('---')
situacaoAluno(7.8)
console.log('---')
situacaoAluno(5.5)
console.log('---')
situacaoAluno(4)
console.log('---')
situacaoAluno(11)
console.log('---')
situacaoAluno(-1)
console.log('---')

//Exercicio - Tentar colocar dentro da expressao IF uma chamada para uma função, para diminuir o codigo. Tentar usar codigo final curso em vídeo.

