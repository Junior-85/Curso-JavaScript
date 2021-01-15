//Em uma funcao arrow, o ternário é nota >= 7 ? 'aprovado' : 'Reprovado'
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(6))


// OU -> Armazenando resultado em uma costante 
const nota = 8
const status = nota >= 7 ? 'Aprovado' : 'Reprovado' // const variavel = condicao ? valorSeTrue : valorSeFalse

console.log(status)

/*Ternário é composto por 3 partes, onde o ternário nota >= 7 ? 'Aprovado':'Reprovado', 
1° parte: o condicional nota>=7 ... que resulta true ou false
?: é o simbolo do ternário
2° parte: o 'Aprovado' ... se o resultado da condição for true
: é o simbolo entre true e false, resultado da condição
3° parte: o 'Reprovado'... se o resultado for false 
a parte 2 e 3 devem ser separadas por : 
*/

// OU

let idade = 6
let res = idade >=18 ? 'Maior Idade' : 'Menor Idade'

console.log(res)

//Função de teste ternário
function maiorMenor(idade){
    let res = idade >=18 ? 'Maior Idade' : 'Menor Idade'
    return res
}

console.log(maiorMenor())

