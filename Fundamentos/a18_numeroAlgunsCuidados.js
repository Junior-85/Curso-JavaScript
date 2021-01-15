// Cuidado com divisão por 0. o resultado é infinito ou fica maior do que dividendo. Não gera ERRO. 
console.log(7 / 0)

//Divisão de um valor tipo string, o javascript faz por detectar o valor, mas cuidado, o JavaScript não reconhece '10,2' como valor númerico
console.log('10' / 2)
console.log('3' + 2)
//JavaScript não realizará a operação
console.log('Show' / 2) // Como string nesse caso tem prioridade de concatenação e faz sentido, será feita a concatenação e não Soma.

//Por questão de velocidade o JS usa uma especificação que precisão menor no resultado de numeros flutuantes. 
console.log(0.1 + 0.7)

//Não é possivel converter um numero literal para strig
//console.log(10.toString()) -> dará erro.

//Usando o valor entre parenteses será possivel usar as funções de conversão e etc.
console.log((10.345).toString())
console.log((10.345).toFixed(2))
console.log((10).toFixed(2))


