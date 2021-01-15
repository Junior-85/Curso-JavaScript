let valor // não foi inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor) 

valor = 3
console.log(valor)

valor = null //ausencia de valor
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)// Resultado sera Undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(produto.preco.toFixed(2))

produto.preco = undefined // Evite atribuir Undefined, deixe que a linguagem informe quem é undefide
console.log(produto.preco)
console.log(!!produto.preco)
//delete produto.preco // para deletar um atributo de um objeto
console.log(produto)

produto.preco = null //É usado para informar que o produto esta sem preço
console.log(produto)
console.log(!!produto.preco)


