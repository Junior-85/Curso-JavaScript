//Novo recusrso do ES2015

//Objeto criado 

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

//extrair nome e idade do objeto pessoa, ter acesso a essas duas variáveis dentro do programa

let gilmar = pessoa.nome // Forma Padrão
console.log(gilmar)

//      USANDO DESCRUCTURING 
//*Forma simplificada de tirar de um objeto, dois atributos

const {nome, idade} = pessoa
console.log(nome, idade)//Com apenas 1 linha tirar vários atibutos de um objeto

//*Retirar ou acessar atributos do objeto e jogar ou colocar os valores dos atributos em novas variáveis, no caso 'n' e 'i'
const {nome: n, idade: i } = pessoa
console.log(n, i)

//* Acessar ou retirar atributos que não existem no objeto
const {sobrenome, bemHumorada = true} = pessoa //Atribuir valor padrão para algo que se sabe que pode dar undefined, ex bemHumorada = true, atribui valor padrão para bemHumorada
console.log(sobrenome, bemHumorada)

//* Acesssar atributo dentro de um objeto dentro de outro objeto.

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

