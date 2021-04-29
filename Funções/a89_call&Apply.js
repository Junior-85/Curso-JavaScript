// Formas diferentes de se chamar uma Funcao

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //Adicionado método getPreco dentro do objeto, mas se não for colocado a chamada da funcao getPreco nao funciona
}

global.preco = 20  //para que o this acesse esses valores
global.desc = 0.1  //para que o this acesse esses valores

console.log(getPreco())
console.log(produto.getPreco()) //Chamada de getPreco atraves de um produto, mas o metodo getpreco deve estar dentro do objeto, senão não funciona

//Outras formas de se chamar getPreco Call e Apply

const carro = {
    preco: 30000,
    desc: 0.20
}

//CALL
console.log('Com CALL')
console.log(getPreco.call(carro)) // Chamada do tipo call, Coloca o objeto como contexto de execuçao, no caso carro
console.log(getPreco.call(produto)) // Chamada do tipo call, Coloca o objeto como contexto de execuçao, no caso produto
//Diferenca entre call e apply e a passagem de parametros, no call ...
//Diretamente nos parametros do call são passados os parametros que serao passados para a funcao getPreco
//O primeiro é o contexto, que pode estar nulo, global ou pbjeto carro ou produto, e os outros são parametros imposto e moeda que serao passados para a funcao
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.call(produto, 0.17, '$'))
console.log(getPreco.call(global, 0.17, '$'))

//APPLY
console.log('Com APPLY')
console.log(getPreco.apply(carro))// Chamada do tipo apply, Coloca o objeto como contexto de execuçao, no caso produto
console.log(getPreco.apply(produto)) // Chamada do tipo apply, Coloca o objeto como contexto de execuçao, no caso produto
                                // Diferenca entre call e apply é a passagem de parametros
// Os parametros sao passados diretamente dentro de um array
// No apply, O primeiro parametro é o objeto que sera usado como contexto de execuçao da funcao, no caso carro
// E depois em um array com todos os parametros que serao usados na funcao
console.log(getPreco.apply(carro, [0.17, '$']))
console.log(getPreco.apply(produto, [0.17, '$']))
// console.log(getPreco.apply(global, [0.17, '$']))
// console.log(getPreco.aplly(global, [0.17, '$']))