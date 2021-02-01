// Closure é o escopo criado quando uma fução é declarada
// Esse escopo permite a função acessar e manipula variáveis externas á função. 
//Contexto Léxico em ação!!!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

console.log(fora())//Funcao 'fora' retorna funcao, por isso é preciso colocar o retorno da funcão 'fora' dentro de uma constante pra saber o resultado da execucao que foi chamada pela funcao 'fora.

const minhaFuncao = fora()
console.log(minhaFuncao())