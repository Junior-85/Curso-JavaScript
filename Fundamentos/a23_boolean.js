let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Para transformar um valor em boolean.. 
//Para no seu estado inicial ser considerado boolean usa-se duas negações.

isAtivo = 1
console.log(!isAtivo) //Usando uma negação, nego o valor, transforma em false 
console.log(!!isAtivo) //Usando duas negações, inverto a logica, e transformo em verdadeiro

//Tipos que não são verdadeiros ou falsos mas que num contexto que é necessario se comportara como VERDADEIRO
//Com excessão do 0, todos os nuemros inteiros são verdadeiros
console.log('Os VERDADEIROS...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //Espaço vazio é verdadeiro
console.log(!!'teste')
console.log(!![]) //Array vazio é verdadeiro
console.log(!!{}) //Objeto tambem é verdadeiro
console.log(!!Infinity) //infinity tambem se comporta como verdadeiro no Javascript
console.log(!!(isAtivo = 3))//Em uma atribuição, se o resultado foi resolvido, ou o valor da atribuição verdadeiro, ele tambem é verdadeiro. O resultado da atribuição é verdadeiro


//Tipos que não são verdadeiros ou falsos mas que num contexto que é necessario se comportara como VERDADEIRO
//Com excessão do 0, todos os nuemros inteiros são verdadeiros
console.log('Os FALSOS...')
console.log(!!'') //String Vazia, ou campo que não foi preenchido, é falso
console.log(!!null)
console.log(!!NaN) //Not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))//Se o valor atribuido for resultado para falso, a atribuição tera resultado como falso//Se o valor atribuido pela variável é falso

console.log('DICA Para Finalizar ')
console.log(!!(''|| null|| " ")) //Se pelo menos um for verdadeiro, será verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') //Se o nome não for valido ou o campo não estiver preenchido, ele faz a outra opção. 





