const notas = [7.7, 6.5, 5.3, 8.9, 2.7, 7.1, 9.0]

//1° Exemplo: Sem Callback criação de um array de notas e retirar dele todas as notas menores que 7 e colocar em um novo array.

const notasbaixas = []
for (let i in notas) { //i é o indice das notas
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])//Coloquei dentro de um array 
    }
}
console.log(notas)
console.log('-----------')
console.log(notasbaixas)
console.log('-----------')

//2° Exemplo com Callback 
//filter() é uma função que filtra os elementos de um array sob determinado criterio que será uma função callback que retornará true ou false, em cada elemento sera chamada essa função, se true o elemento deve ser adicionado no array que esta sendo gerado, se false não sera adicionado no array.  

//Recebe o proprio elementro do array, não precisa indicar indice. Se a condição de retorno for verdadeira ela vai para o array notasBaixas. Essa função será invocada para cada um dos elementos.

const notasbaixas2 = notas.filter(function(nota) {
    return nota < 7
}) 

console.log(notasbaixas2)
console.log('-----------')

//Com função arrow

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
console.log('-----------')

//Função separada para que possa ser reutilizada
const menorQue7 = nota => nota < 7 //Função separada
const notasBaixas4 = notas.filter(menorQue7)
console.log(notasBaixas4)

//Filter faz quase tudo ...


