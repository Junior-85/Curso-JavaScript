//Math.flor é para arrendondar o valor da variavel para numero inteiro(floor, arredondar para baixo).
//Math.roud é para arredondar para o valor mais proximo do inteiro. 0.5 é arredondado para inteiro maior.
//Switch só trabalha com valores inteiros. São escolhas de caso.

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //O teste não é logico. É se o valor inteiro, qual case se encaixa para executar. Não é relacional. Possivel passar valores e tipos.
        case 10: //Se a sentença a ser executada é a mesma que a posterior, precisa colocar
        case 9:
            console.log('Aprovado com Mérito')
            break // Break deve ser colocado se não as sentenças posteriores serão executadas sem necessidade
        case 8: case 7: case 6:
            console.log('Aprovado')
            break
        case 5: case 4:
            console.log('Em Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Aluno REPROVADO!!!')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(9.1)
imprimirResultado(8.5)
imprimirResultado(7)
imprimirResultado(6.9)
imprimirResultado(5)
imprimirResultado(4.9)
imprimirResultado(3.9)
imprimirResultado(2)
imprimirResultado(1)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(11)

