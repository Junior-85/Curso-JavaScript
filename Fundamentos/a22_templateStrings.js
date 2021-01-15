const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + ' !' // Não é possivel quebra a string no meio e colocar em nova linha
console.log(nome, concatenacao)
const template = `Olá
${nome} ! `

//Em expressões 

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)

