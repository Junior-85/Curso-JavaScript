//Atribuição por REFERENCIA
// A atribuição é feita ao local onde o objeto esta armazenado na memoria
// Se em uma variavel for feita uma alteração, isso afetara outra, porque ambas
// fazem referencia ao mesmo local.
const a = {name: 'Teste'}
console.log(a)

const b = a
console.log(b)

b.name = 'Opa'
console.log(b)
console.log(a)

// Atribuição por VALOR
// A alteração do valor em uma variável não afeta o valor da outra, porque o valor
// de uma foi copiado para outra, mas os valores continuam sendo independente dentro
// da variável.

let c = 3
console.log(c)
let d = c
console.log(d)
d++ //Incremento de 1 na variável d
console.log(d)

