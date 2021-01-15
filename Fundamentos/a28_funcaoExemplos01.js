//Funcao Sem RETORNO com parametros de entrada
 function imprimirSoma(a, b){
    console.log(a + b)
 }

 imprimirSoma(2, 3) //Chamada da Função 
 imprimirSoma(2) //Chamada da função com apenas um parametro é possivel, mas o resultado sera Nan. 
 //Para tratar Chamda de funcao somente com um parametro

 function exibirSoma(a = 1, b = 1) {// =1 é uma definiçao de valor padrão caso nenhum valor seja passado na chamada da função.
    console.log(a + b)
 }

exibirSoma(2)

//Funcao com Retorno

function soma(a, b = 1) {
return a + b
}

console.log(soma(3, 6))
console.log(soma(1))