//Função sem parametro não quer dizer que não se pode passar parametros
//Dentro da função é possivel recuperar os parametro atravez de uma propriedade arguments
function soma() {
let soma = 0
for (i in arguments) { //arguments é um array e atravez do i pegamos os elementos do array.
    soma += arguments[i]//pegar todos os parametros, atraves do seu indice, que serao passados que serao armazenados no array.
    }
    return soma 
}

console.log(soma(2,3,5))

//Todas as funções tem arguments