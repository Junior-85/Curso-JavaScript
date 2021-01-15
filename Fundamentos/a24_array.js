const valores = [ 7.7, 8.5, 5.4, 7.2 ]
console.log(valores)
console.log(valores[0], valores[3])//Para pegar o elemento no indice 0 e no indice 3
console.log(valores[4]) // Procurar um elemento por indice que não existe, não da erro. CUIDADO.

//valores [4] = 10 //Para incluir um valor no array em uma posição especifica
console.log(valores) //Para exibir todos os elementos no array 

//valores [10] = 3 // É possível colocar um valor em qualquer posição no array deixando várias posições em branco ou vazias.
// valores [5] = 3
//console.log(valores) // Na exibição dos elementos do array sera infomado quantas posições existem vazias


console.log(valores.length) // Para saber quantos elementos existem dentro de um array

valores.push({id:3}, false, null, 'teste')

console.log(valores.length)
console.log(valores)

console.log(valores.pop())//Remove o ultimo elemento do array e exibe ele na saída
console.log(valores)

delete valores[0] // Remove elemento atravez da indicação de seu indice. O indice ficará vazio.
console.log(valores)

console.log(typeof valores) // Para verificar que em JS array é um object

