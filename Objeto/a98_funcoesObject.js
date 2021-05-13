//Funções importantes dentro da função Object 

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Pega todas as chaves ou atributos do objeto
console.log(Object.values(pessoa)) // Valores dos atributos do objeto 
console.log(Object.entries(pessoa)) // Coloca em um array subarray's com a combinação chave e valor do objeto, lista de de chaves e valores


//Exemplo usando foreach para tirar elementos do array. Só funciona porque foi utilizado o Object.entries que joga os valores em um array
Object.entries(pessoa).forEach(teste => { //Com o forEach é possivel percorrer cada elemento do array que nesse caso é a combinação chave e valor do objeto
    console.log(`${teste[0]}:${teste[1]}`)
})

// Para tirar os elementos do array, no exemplo acima, usar destructuring 
                                                        // Desestruturando os elementos de um array, pegando cada elemento que vem no forEach, um array e tirando o elemento 1 e o elemento 2, sabendo que o priemiro é uma chave e o segundo é um valor 
Object.entries(pessoa).forEach(([chave, valor]) => {  //Nesse caso o operador destructuring é [], foi colocado entre parenteses para o JS entender que é destructuring
    console.log(`${chave}: ${valor}`)
})

// Definir uma propriedade de um objeto, vantagem em relacão a definição dinamica é possivel definir características de uma propriedade
// 1° definir o target ou objeto que sera manipulado, 2° o nme da propriesdade, 3° Objeto com as caracteristicas da propriedade
Object.defineProperty(pessoa, 'dataNascimento', { 
    enumerable: true, //True permite que a chave seja enumerada ou apareca através do Object.keys
    writable: false,
    value: '02/08/1985'
}) 

console.log(pessoa)
pessoa.dataNascimento = '01/01/2010'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
Object.assign(dest, o1, o2)
const objt = Object.assign(dest, o1, o2) // Metodo assign do Object coloca em um objeto, atributos de outros objetos, 1/ elemento da funçao é o objeto de destino, e os outros parametros são objetos de onde serão tirados os elementos, elementos no objeto destino serão sobrescrtios se houver duplicidade de valor
console.log(objt)
console.log(dest)

Object.freeze(objt)
objt.c = 1234
console.log(objt)


const testeArr = {teste: [{nome: 'Gilmar', altura: 175}, {nome: 'Barbara', altura: 165}]}
console.log(testeArr.teste[0].nome)
//console.log(testeArr[0].nome) //Não funciona, procurou algo não existe
 
