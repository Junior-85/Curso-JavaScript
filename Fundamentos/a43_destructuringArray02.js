//Destructing com array de apenas um valor
const [a] = [10]
console.log(a)

//Criando várias variaveis com apenas uma chamada
//Como extrair multiplos elementos de um array
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//Pegar elemento de um array composto
//Códio para teste não é usado na pratica, apenas estudo
//É mais pratico e facil acessar pelo indice
const [, [, nota]] = [[,8, 8],[, 9,6,8]]
console.log(nota)

