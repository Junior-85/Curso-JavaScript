function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //Se caso valor minimo for maximo, condicao para inverter
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Para arredondar para baixo
}

console.log(rand([50,40]))//Passando parametro min maior que max
console.log(rand([992]))//Passando apenas um parametro no array 
console.log(rand([]))//Passanfo um array vazio, funcao usara parametros padrao definidos
//console.log(rand())// Não funciona, desestruturar algo que esta undefined. Da ERRO.