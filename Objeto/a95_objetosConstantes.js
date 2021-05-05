//Perguntra respondida: Um objeto foi criado como constante, como é possivel ser modificado seus atributos

// A variável pessoa aponta para um endereço de memória
// pessoa -> 123 (no endereço de memoria que esta o objeto
const pessoa = {nome: 'João'} 
pessoa.nome = 'Pedro' //A constante continua apontando para o endereço, o objeto (dado) no endereço pode ser alterado,
                    // o que não pode ser modificado é a constante pessoa
console.log(pessoa)                    

// Em uma tentantiva de modificar o apontamento da variavel const ex: pesso -> endereço de memorira 456 -> com outro obj não é possivel
//pessoa = {nome: 'Ana'} //Não é possivel atribuir para a const pessoa um outro objeto, se foi criado outro objeto ele esta em outro endereço
//No exemplo haverá um erro.

Object.freeze(pessoa) // Congelando o objeto pessoa, não é possivel modificar o objeto.
pessoa.nome = 'Maria' //Não há erro mas não é realizada a modificação
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'João', altura: 175}) //Criação de um objeto que já é constante, bloqueado ou congelado, que não poderá ser modificado
console.log(pessoaConstante)



