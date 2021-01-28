//1° Estratégia para gerar valor padrão, utilização do operador OU para um valor de variável que não esta 'setado', nulo ou undefine, usando OU ele vai para o segundo operando (retorna ele) caso a primeira parte da expressão seja falso
//TECNICA  é mais usada para saber e ter uma alternativa se o primeiro elemento é valido, não necessariamente um numero (Em caso de numero usar o padrão ECMA2015)

function soma1(a, b, c) {
    a = a || 1 // Se o primeiro operando for falso assume o valor 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())//1° teste - Por não ter passado nenhum valor, os valores serão undefined e as variaveis terão o valor padrão

console.log(soma1(), soma1(3), soma1(1, 2, 3))

//Problema quando for tentado passar valor 0 (zero), na logica OU ele considerará zero como falso e atribuira para a variavel o valor padrão. O que não é a intenção.
console.log(soma1(0,0,0))

//Estrategia 2, 3, 4 - usando operador ternário, arguments, 
// Essas estrategias são trabalhosas, podem causar confusão e bugs

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //pode ser usado != para testar nulo
    b = 1 in arguments ? b : 1 //Indicar indice q deverá ser testado [1] ex
    c = isNaN(c) ? 1 : c // Estrategia mais segura

    return a + b + c
}

console.log(soma2()) // Teste sem passar parâmetros
console.log(soma2(3)) // Passando somente um parametro
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0)) //Teste com parametros 0

//SOLUÇÃO PARA PARAMETROS PADRÃO ECMA 2015

function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log('--- Passagem de Parâmetros Padrão EMCA 2015---')
console.log(soma3()) //Sem parametros
console.log(soma3(0, 0, 0))


