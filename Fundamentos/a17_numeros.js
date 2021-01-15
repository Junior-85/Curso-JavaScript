const peso1 = 1.0 // 
const peso2 = Number('2.0') //Number() é uma função para fazer com que o valor seja do tipo number


console.log(peso1, peso2)

//Para verificar se o valor da variável é inteiro
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//toFixed(2) para limitar 2 casas decimais na exibição resultado
console.log(media.toFixed(2)) 

//toString para retornar o valor como uma string. O valor será o da constante (const media), sem limite de casas decimais por que ela não pode ser modificada na variavel, só a exibição do valor.
console.log(media.toString()) 
// numero 2 dentro do parenteses para exibir o valor em numero binário
console.log(media.toString(2)) 

//typeof para saber o tipo do dado do valor da variavel

console.log(typeof media)
