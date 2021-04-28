//Atraves dos parametros podemos criar os atribusos do objeto.
//Utilizando valores por parametros é possivel cirar varios novos produtos através da chamada da função
function criarProduto(nome, preco ) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Abajur', 'R$ 123'))
console.log(criarProduto('Notebook', 2990))
var teste = criarProduto('PS4', 2.500)

//Teste para exibir um valor do objeto
console.log(teste.nome)

/*Dentro do retorno da factory tambem podem ser colocadas funções*/